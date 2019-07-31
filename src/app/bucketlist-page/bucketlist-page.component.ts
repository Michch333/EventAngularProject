import { Component, OnInit } from '@angular/core';
import { BuildEventService } from '../build-event.service';

interface Event {
  name: string,
  venue: string,
  venueAddress: string,
  date: string,
  description: string,
  // ticketPrice: number, Doesnt look like we can get this right now :(  
  link: string
};

@Component({
  selector: 'app-bucketlist-page',
  templateUrl: './bucketlist-page.component.html',
  styleUrls: ['./bucketlist-page.component.css']
})
export class BucketlistPageComponent implements OnInit {

  eventArray : Object [] = [];
  eventObject : Event;
  event : Event;

  constructor(private buildEvent : BuildEventService) { }

  ngOnInit() {
    this.eventArray = this.buildEvent.getBucketList();
  }

  removeEvent(event){
    let indexNumber = this.eventObject.indexOf(event)
    this.eventObject.splice(indexNumber, 1);
  }

  

}


