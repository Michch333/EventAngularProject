import { Component, OnInit } from '@angular/core';
import { GetTicketmasterDataService } from '../get-ticketmaster-data.service';
import { BuildEventService } from '../build-event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventArray : Object[] = [];
  bucketListArray: Object[] = [];

  constructor(private ticketMasterData : GetTicketmasterDataService, private buildEvent: BuildEventService) { 
  }


  ngOnInit() {

    this.eventArray = this.buildEvent.getResults();
  }

  addToBucketList(event){

    this.buildEvent.addToBucket(event);

  }

}
