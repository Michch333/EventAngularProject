import { Component, OnInit } from '@angular/core';
import { GetTicketmasterDataService } from '../get-ticketmaster-data.service';

interface Event {
  name: string,
  venue: string,
  date: string,
  // ticketPrice: number, Doesnt look like we can get this right now :( 
  link: string
}

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  typeOfEvent : string;

  constructor(private ticketMasterData : GetTicketmasterDataService) { }

  getTicketMasterData() {
    this.ticketMasterData.getData().subscribe((e: any) =>{
      console.log(e);
    })
  }

  ngOnInit() {
    this.getTicketMasterData();
  }

}
