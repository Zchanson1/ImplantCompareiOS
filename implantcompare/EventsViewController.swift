//
//  MasterViewController.swift
//  implantcompare
//
//  Created by David Tucito on 6/26/16.
//  Copyright © 2016 ImplantCompare. All rights reserved.
//

import UIKit
import Alamofire
import AlamofireImage
import PullToRefreshSwift
import DZNEmptyDataSet
import Contentful

class EventsViewController: UITableViewController, DZNEmptyDataSetSource, DZNEmptyDataSetDelegate {

    var detailViewController: EventViewController? = nil
    var objects = [Event]()
    var pastEvents = [Event]()
    var upcomingEvents = [Event]()
    var loadingData = false

    @IBOutlet weak var segmentedControl: UISegmentedControl!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        Utils.showActivityIndicator(self.tableView)
        self.loadDataContentful()
        
//        let event1: Event = Event(eventId: 1, title: "Dr. Jesus Ostos Dental Photography Workshop", description: "Dr. Jesus Ostos and Dr. Eduardo De Agüiar continue their WTPRM workshop for dental photography.", author: "Implant Compare", date: NSDate(), videoURL: "https://livestream.com/accounts/19511620/events/5549441/videos/125890732/player?autoPlay=false&height=360&mute=false&width=640", thumbnailURL: "http://implantcompare.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-13-at-4.23.34-PM.png")
//        objects.append(event1)
//        let event2: Event = Event(eventId: 2, title: "Humanitarian Efforts by Dr. Kurt Hummeldorf", description: "Dr. Kurt Hummeldorf talks about natural disasters and how the US Military is getting involved to help the victims.", author: "Implant Compare", date: NSDate(), videoURL: "https://livestream.com/accounts/19511620/events/5549441/videos/125978851/player?autoPlay=false&height=360&mute=false&width=640", thumbnailURL: "http://implantcompare.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-13-at-4.28.17-PM.png")
//        objects.append(event2)
        
        if let split = self.splitViewController {
            let controllers = split.viewControllers
            self.detailViewController = (controllers[controllers.count-1] as! UINavigationController).topViewController as? EventViewController
        }
        
        // Pull To Refesh
        self.tableView.addPullToRefresh({ [weak self] in
            self?.loadDataContentful()
        })
        
        // Empty State
        self.tableView.emptyDataSetSource = self
        self.tableView.emptyDataSetDelegate = self
        
        // Add Footer
        self.tableView.tableFooterView = UIView()
        
        NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(self.loadDataContentful), name:"ReloadData", object: nil)
    }
    
    func loadData() {
        Alamofire.request(.GET, "https://public-api.wordpress.com/rest/v1.1/sites/implantcompare.com/posts/", parameters: ["Authorization" : "Bearer ^a31sUr4XrkMS3ULFlze$NXT8pBOg&7M3GK#Fu9i2^n^VoH%B#5e8$WPvcmO1^1U"])
            .responseJSON { (request, response, data) in
                self.objects = []
                self.pastEvents = []
                self.upcomingEvents = []
                
                guard let value = data.value as? [String: AnyObject],
                    let found = value["found"] as? Int,
                    let posts = value["posts"] as? [[String: AnyObject]] else {
                        self.doneLoadingData()
                        return
                }
                
                if found > 0 {
                    for post in posts {
                        var event: Event
                        if post["ID"] != nil
                            && post["title"] != nil
                            && post["content"] != nil
                            && post["excerpt"] != nil
                            && post["date"] != nil {
                            
                            let dateFormatter = NSDateFormatter()
                            dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZ"
                            let date = dateFormatter.dateFromString(post["date"] as! String)!
                            //let minutesDifference = NSCalendar.currentCalendar().components(.Minute, fromDate: date, toDate: NSDate(), options: []).minute
                            
                            event = Event(
                                eventId: post["ID"] as! Int,
                                title: (post["title"] as! String).stringByReplacingOccurrencesOfString("&#038;", withString: "&"),
                                description: (post["excerpt"] as! String).stringByReplacingOccurrencesOfString("<[^>]+>", withString: "", options: .RegularExpressionSearch, range: nil),
                                date: date,
                                videoURL: (post["content"] as! String).stringByReplacingOccurrencesOfString("<[^>]+>", withString: "", options: .RegularExpressionSearch, range: nil).stringByReplacingOccurrencesOfString("&#038;", withString: "&").stringByReplacingOccurrencesOfString("&amp;", withString: "&").stringByReplacingOccurrencesOfString("\n", withString: "").stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet())
                            )
                            
                            if let thumbnailUrl = post["featured_image"] as? String {
                                event.thumbnailURL = thumbnailUrl
                            }
                            
                            if let tags = post["tags"] as? [String: AnyObject] {
                                if tags["Upcoming"] != nil {
                                    self.upcomingEvents.append(event)
                                } else {
                                    self.pastEvents.append(event)
                                }
                            }
                        } else {
                            self.doneLoadingData()
                            continue
                        }
                    }
                }
                
                if self.segmentedControl.selectedSegmentIndex == 0 {
                    self.objects = self.upcomingEvents
                } else {
                    self.objects = self.pastEvents
                }

                self.doneLoadingData()
        }
    }
    
    func loadDataContentful() {
        if !self.loadingData {
            self.loadingData = true
            
            let client = Client(spaceIdentifier: "gcjcs5p8y33w", accessToken: "26897dc8b6ced9416f0cced0636cbb705168cfbf6722b65b0410f11e144f9502")
            let params: [String: String] = ["content_type" : "event"]
            client.fetchEntries(params) { (result) in
                
                switch result {
                case let .Success(result):
                    self.objects = []
                    self.pastEvents = []
                    self.upcomingEvents = []
                    
                    let dateFormatter = NSDateFormatter()
                    dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mmZ"
                    result.items.forEach {
                        //print($0)
                        let date = dateFormatter.dateFromString($0.fields["date"] as! String)!
                        let minutesDifference = NSCalendar.currentCalendar().components(.Minute, fromDate: date, toDate: NSDate(), options: []).minute
                        
                        let event = Event(
                            eventId: 0,//$0.fields["id"] as! Int,
                            title: $0.fields["title"] as! String,
                            description: $0.fields["description"] as! String,
                            author: $0.fields["author"] as! String,
                            date: date,
                            videoURL: $0.fields["url"] as! String,
                            thumbnailURL: ($0.fields["thumbnail"] != nil) ? "https:"+((($0.fields["thumbnail"] as! Asset).fields["file"] as! [String:AnyObject])["url"] as! String) : ""
                        )
                        
                        if minutesDifference < 120 {
                            self.upcomingEvents.append(event)
                        } else {
                            self.pastEvents.append(event)
                        }
                    }
                    self.pastEvents.sortInPlace { NSCalendar.currentCalendar().components(.Minute, fromDate: $0.date, toDate: NSDate(), options: []).minute < NSCalendar.currentCalendar().components(.Minute, fromDate: $1.date, toDate: NSDate(), options: []).minute }
                    self.upcomingEvents.sortInPlace { NSCalendar.currentCalendar().components(.Minute, fromDate: $0.date, toDate: NSDate(), options: []).minute > NSCalendar.currentCalendar().components(.Minute, fromDate: $1.date, toDate: NSDate(), options: []).minute }
                    dispatch_async(dispatch_get_main_queue(), {
                        self.doneLoadingData()
                    })
                case .Error(_):
                    print("Error while loading data!")
                    dispatch_async(dispatch_get_main_queue(), {
                        self.doneLoadingData()
                    })
                }
            }
        }
    }
    
    @IBAction func segmentedControlValueChanged(sender: AnyObject) {
        if self.segmentedControl.selectedSegmentIndex == 0 {
            self.objects = self.upcomingEvents
        } else {
            self.objects = self.pastEvents
        }
        self.tableView.reloadData()
    }
    
    func doneLoadingData() {
        if self.segmentedControl.selectedSegmentIndex == 0 {
            self.objects = self.upcomingEvents
        } else {
            self.objects = self.pastEvents
        }
        self.tableView.reloadData()
        self.tableView.stopPullToRefresh()
        Utils.hideActivityIndicator(self.tableView)
        self.loadingData = false
    }

    override func viewWillAppear(animated: Bool) {
        self.clearsSelectionOnViewWillAppear = self.splitViewController!.collapsed
        super.viewWillAppear(animated)
    }
    
    override func viewDidAppear(animated: Bool) {
        if let split = self.splitViewController {
            let defaults = NSUserDefaults.standardUserDefaults()
            if defaults.stringForKey("UserId") == nil {
                split.performSegueWithIdentifier("ToLogin", sender: nil)
            }
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    // MARK: - Segues

    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if segue.identifier == "showDetail" {
            if let indexPath = self.tableView.indexPathForSelectedRow {
                let object = objects[indexPath.row]
                let controller = (segue.destinationViewController as! UINavigationController).topViewController as! EventViewController
                controller.detailItem = object
            }
        }
    }

    // MARK: - Table View

    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 1
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return objects.count
    }

    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("Cell", forIndexPath: indexPath) as! EventTableViewCell

        let object = objects[indexPath.row]
        cell.titleLabel.text = object.title
        cell.descriptionLabel.text = object.description
        cell.dateLabel.text = object.date.timeAgo()
        cell.thumbnailImageView.af_setImageWithURL(NSURL(string: object.thumbnailURL)!, placeholderImage: UIImage(named:"video-placeholder.png"), filter: AspectScaledToFillSizeFilter(size: cell.thumbnailImageView.bounds.size))
        return cell
    }
    
    // MARK: - Empty State
    
    func titleForEmptyDataSet(scrollView: UIScrollView!) -> NSAttributedString! {
        return NSAttributedString(string: "No upcoming events")
    }
    
    func descriptionForEmptyDataSet(scrollView: UIScrollView!) -> NSAttributedString! {
        return NSAttributedString(string: "Check back soon or browse our past events")
    }
    
    func imageForEmptyDataSet(scrollView: UIScrollView!) -> UIImage! {
        return UIImage(named: "event.png")
    }
    
    func emptyDataSetShouldAllowScroll(scrollView: UIScrollView!) -> Bool {
        return true
    }
}

