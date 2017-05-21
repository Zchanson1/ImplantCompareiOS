//
//  Event.swift
//  implantcompare
//
//  Created by David Tucito on 6/26/16.
//  Copyright © 2016 ImplantCompare. All rights reserved.
//

import Foundation

class Event {
 
    var eventId: Int = 0
    var title: String = ""
    var description: String = ""
    var author: String = ""
    var date: NSDate = NSDate()
    var videoURL: String = ""
    var thumbnailURL: String = ""
    var upcoming: Bool = false
    
    init() {}
    
    init(eventId: Int, title: String, description: String, author: String, date: NSDate, videoURL: String, thumbnailURL: String) {
        self.eventId = eventId
        self.title = title
        self.description = description
        self.author = author
        self.date = date
        self.videoURL = videoURL
        self.thumbnailURL = thumbnailURL
    }
    
    init(eventId: Int, title: String, description: String, date: NSDate, videoURL: String) {
        self.eventId = eventId
        self.title = title
        self.description = description
        self.date = date
        self.videoURL = videoURL
    }
}