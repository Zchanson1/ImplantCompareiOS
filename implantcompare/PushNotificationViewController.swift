//
//  PushNotificationViewController.swift
//  implantcompare
//
//  Created by David Tucito on 7/20/16.
//  Copyright © 2016 ImplantCompare. All rights reserved.
//

import UIKit
import ChameleonFramework

class PushNotificationViewController: UIViewController {

    @IBOutlet weak var noButton: UIButton!
    @IBOutlet weak var yesButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        self.yesButton?.setTitleColor(.whiteColor(), forState: .Normal)
        self.yesButton?.backgroundColor = FlatSkyBlue()
        self.yesButton?.layer.cornerRadius = 5
        
        self.noButton?.layer.borderColor = FlatSkyBlue().CGColor
        self.noButton?.layer.borderWidth = 1
        self.noButton?.layer.cornerRadius = 5
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func noTapped(sender: AnyObject) {
        self.presentingViewController!.presentingViewController!.dismissViewControllerAnimated(true, completion: {})
    }
    
    @IBAction func yesTapped(sender: AnyObject) {
        OneSignal.defaultClient().registerForPushNotifications()
        self.presentingViewController!.presentingViewController!.dismissViewControllerAnimated(true, completion: {})
    }

}
