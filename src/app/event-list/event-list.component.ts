import { Component, OnInit } from '@angular/core';
import { GetTicketmasterDataService } from '../get-ticketmaster-data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private ticketMasterData : GetTicketmasterDataService) { 
  }


  ngOnInit() {
  }

}
