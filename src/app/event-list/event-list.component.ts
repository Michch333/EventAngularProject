import { Component, OnInit } from '@angular/core';

import { BuildEventService } from '../build-event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  bucketListArray: Object[] = [];

  constructor( private buildEvent: BuildEventService) { 
  }


  ngOnInit() {}

  addToBucketList(event){

    this.buildEvent.addToBucket(event);

  }

}
