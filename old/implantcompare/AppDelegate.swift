//
//  AppDelegate.swift
//  implantcompare
//
//  Created by David Tucito on 6/26/16.
//  Copyright © 2016 ImplantCompare. All rights reserved.
//

import UIKit
import ChameleonFramework
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, UISplitViewControllerDelegate {

    var window: UIWindow?


    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        
        // Colors
        self.window!.tintColor = FlatSkyBlue()
        //UINavigationBar.appearance().barTintColor = FlatSkyBlue()
        //UINavigationBar.appearance().tintColor = UIColor.whiteColor()
        //UINavigationBar.appearance().titleTextAttributes = [NSForegroundColorAttributeName : UIColor.whiteColor()]
        UINavigationBar.appearance().tintColor = FlatSkyBlueDark()
        UINavigationBar.appearance().titleTextAttributes = [
            NSFontAttributeName: UIFont.systemFontOfSize(14)
        ]
        
        // One Signal
        _ = OneSignal(launchOptions: launchOptions, appId: "a4acb3bb-f4db-4e8a-b631-cf1f725e8269", handleNotification: nil, autoRegister: false)
        OneSignal.defaultClient().enableInAppAlertNotification(true)
        
        // Firebase
        FIRApp.configure()
        
        let splitViewController = self.window!.rootViewController as! UISplitViewController
        let navigationController = splitViewController.viewControllers[splitViewController.viewControllers.count-1] as! UINavigationController
        navigationController.topViewController!.navigationItem.leftBarButtonItem = splitViewController.displayModeButtonItem()
        splitViewController.delegate = self
        return true
    }

    func applicationWillResignActive(application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(application: UIApplication) {
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
        NSNotificationCenter.defaultCenter().postNotificationName("ReloadData", object: nil)
    }

    func applicationWillTerminate(application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }

    // MARK: - Split view

    func splitViewController(splitViewController: UISplitViewController, collapseSecondaryViewController secondaryViewController:UIViewController, ontoPrimaryViewController primaryViewController:UIViewController) -> Bool {
        guard let secondaryAsNavController = secondaryViewController as? UINavigationController else { return false }
        guard let topAsDetailController = secondaryAsNavController.topViewController as? EventViewController else { return false }
        if topAsDetailController.detailItem == nil {
            // Return true to indicate that we have handled the collapse by doing nothing; the secondary controller will be discarded.
            return true
        }
        return false
    }

}

