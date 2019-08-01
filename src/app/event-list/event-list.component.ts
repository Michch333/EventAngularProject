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

  status: boolean=false;
  viewdetailsstatus: boolean = false;

viewDetails(){
    this.viewdetailsstatus = !this.viewdetailsstatus;       
    }
  modifyBucket(event){
    this.buildEvent.modifyBucket(event);
    this.status = !this.status;   



  }
}
