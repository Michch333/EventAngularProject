import { Component, OnInit } from '@angular/core';
import { GetTicketmasterDataService } from '../get-ticketmaster-data.service';
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
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  eventArray : Object[] = [];
  eventObject: Event;

  typeOfEvent : string;

  

  constructor(private ticketMasterData : GetTicketmasterDataService, private buildEvent : BuildEventService) { }


  ngOnInit() {

      //console.log(this.buildEvent.buildObject("detroit","2019-07-30","little caesars"));
      // console.log(this.buildEvent.buildSuggestion("football"));
    }

    requestEvents(city : string, startDate : string, keyword : string){
       this.buildEvent.buildObject(city,startDate,keyword);
    }
    
    
  }




