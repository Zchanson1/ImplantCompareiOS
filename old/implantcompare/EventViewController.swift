//
//  DetailViewController.swift
//  implantcompare
//
//  Created by David Tucito on 6/26/16.
//  Copyright © 2016 ImplantCompare. All rights reserved.
//

import UIKit
import AlamofireImage
import NSDate_TimeAgo

class EventViewController: UIViewController {

    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var descriptionLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var webView: UIWebView!

    var detailItem: Event? {
        didSet {
            // Update the view.
            self.configureView()
        }
    }

    func configureView() {
        // Update the user interface for the detail item.
        if let detail = self.detailItem {
            self.title = detail.title
            if let label = self.descriptionLabel {
                label.text = detail.description
                label.sizeToFit()
            }
            if let label = self.titleLabel {
                label.text = detail.title
                label.sizeToFit()
            }
            if let date = self.dateLabel {
                date.text = detail.date.timeAgo()
            }
            if let webView = self.webView {
                print(detail.videoURL.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet()))
                if let url = NSURL (string: detail.videoURL.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet())) {
                    let requestObj = NSURLRequest(URL: url);
                    webView.loadRequest(requestObj);
                    webView.mediaPlaybackAllowsAirPlay = true
                }
            }
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        self.configureView()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

