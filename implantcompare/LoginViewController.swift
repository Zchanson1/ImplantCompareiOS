//
//  LoginViewController.swift
//  implantcompare
//
//  Created by David Tucito on 6/26/16.
//  Copyright © 2016 ImplantCompare. All rights reserved.
//

import UIKit
import Eureka
import ChameleonFramework
import Alamofire
import Kamagari
import SafariServices

class LoginViewController: FormViewController {
    
    @IBOutlet weak var logoImageView: UIImageView!
    @IBOutlet weak var loginButton: UIButton!
    @IBOutlet weak var signUpButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // form defaults
        LabelRow.defaultCellUpdate = { cell, row in cell.detailTextLabel?.textColor = FlatSkyBlue() }
            
        // form construction
        form = Section()
            +++ Section("") // just for style
            +++ Section("") // just for style
            +++ Section("") // just for style
            +++ Section("") // just for style
            +++ Section("") // just for style
            <<< TextRow() {
                $0.placeholder = "Username"
                $0.tag = "Username"
            }
            <<< PasswordRow() {
                $0.placeholder = "Password"
                $0.tag = "Password"
        }
            
        self.tableView?.alwaysBounceVertical = false
        self.view.bringSubviewToFront(self.loginButton)
        self.view.bringSubviewToFront(self.logoImageView)
        self.view.bringSubviewToFront(self.signUpButton)

        self.loginButton?.setTitleColor(.whiteColor(), forState: .Normal)
        self.loginButton?.backgroundColor = FlatSkyBlue()
        self.loginButton?.layer.cornerRadius = 5
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func loginTapped(sender: AnyObject) {
        if let userRow : TextRow = self.form.rowByTag("Username") {
            if let user = userRow.value {
                if let passwordRow: PasswordRow = self.form.rowByTag("Password") {
                    if let password = passwordRow.value {
                        Utils.showActivityIndicator(self.view)
                        Alamofire.request(.POST, "http://implantcompare.com", parameters: ["check_login": 2, "ios_userlogin": user, "ios_userpassword": password])
                            .responseJSON { (request, response, data) in
                                
                                Utils.hideActivityIndicator(self.view)
                                
                                guard let value = data.value as? [String: AnyObject],
                                    let data = value["data"] as? [String: AnyObject],
                                    let userId = data["ID"] as? String,
                                    let email = data["user_email"] as? String
                                    else {
                                        // email/password incorrect
                                        AlertBuilder(title: "Wrong email/password", message: "Please try again", preferredStyle: .Alert)
                                            .addAction(title: "OK", style: .Default) { _ in }
                                            .build()
                                            .kam_show(animated: true)
                                        return
                                }
                                
                                NSUserDefaults.standardUserDefaults().setObject(userId, forKey: "UserId")
                                NSUserDefaults.standardUserDefaults().setObject(user, forKey: "UserName")
                                NSUserDefaults.standardUserDefaults().setObject(email, forKey: "UserEmail")
                                
                                print(NSUserDefaults.standardUserDefaults().boolForKey("PushNotificationPrompted"))
                                if NSUserDefaults.standardUserDefaults().boolForKey("PushNotificationPrompted") == false {
                                    NSUserDefaults.standardUserDefaults().setBool(true, forKey: "PushNotificationPrompted")
                                    self.performSegueWithIdentifier("ToPushNotification", sender: nil)
                                } else {
                                    self.dismissViewControllerAnimated(true, completion: nil)
                                }
                        }
                    } else {
                        // password missing
                        AlertBuilder(title: "No password", message: "Please enter a password", preferredStyle: .Alert)
                            .addAction(title: "OK", style: .Default) { _ in }
                            .build()
                            .kam_show(animated: true)
                        
                    }
                }
            } else {
                // username missing
                AlertBuilder(title: "No username", message: "Please enter a username", preferredStyle: .Alert)
                    .addAction(title: "OK", style: .Default) { _ in }
                    .build()
                    .kam_show(animated: true)

            }
        }
    }

    @IBAction func signUpTapped(sender: AnyObject) {
        //UIApplication.sharedApplication().openURL(NSURL(string: "http://implantcompare.com/registration/")!)
        let svc = SFSafariViewController(URL: NSURL(string: "http://implantcompare.com/registration/")!)
        self.presentViewController(svc, animated: true, completion: nil)
    }

}
