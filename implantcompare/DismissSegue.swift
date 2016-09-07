//
//  DismissSegue.swift
//  BudHub
//
//  Created by David Tucito on 6/19/16.
//  Copyright © 2016 BudHub. All rights reserved.
//

import UIKit

class DismissSegue: UIStoryboardSegue {

    override func perform() {
        let sourceViewController = self.sourceViewController;
        sourceViewController.presentingViewController?.dismissViewControllerAnimated(true, completion: nil)
    }
    
}
