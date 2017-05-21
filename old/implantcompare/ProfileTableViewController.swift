//
//  ProfileTableViewController.swift
//
//
//  Created by David Tucito on 7/4/16.
//
//

import UIKit

class ProfileTableViewController: UITableViewController {
    
    @IBOutlet weak var usernameLabel: UILabel!
    @IBOutlet weak var emailLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.usernameLabel?.text = NSUserDefaults.standardUserDefaults().objectForKey("UserName") as? String
        self.emailLabel?.text = NSUserDefaults.standardUserDefaults().objectForKey("UserEmail") as? String
        
        // Add Footer
        self.tableView.tableFooterView = UIView()
        
        self.tableView?.alwaysBounceVertical = false
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func logout(sender: AnyObject) {
        NSUserDefaults.standardUserDefaults().removeObjectForKey("UserId")
        NSUserDefaults.standardUserDefaults().removeObjectForKey("UserName")
        NSUserDefaults.standardUserDefaults().removeObjectForKey("UserEmail")
        self.dismissViewControllerAnimated(true, completion: nil)
    }
    
    // MARK: - Table view data source
    
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 2
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        if section == 0 { return 2 }
        else { return 1 }
    }
    
}
