import { Injectable } from '@angular/core';
import { GetTicketmasterDataService } from './get-ticketmaster-data.service';

@Injectable({
  providedIn: 'root'
})
export class BuildEventService {

  eventObject = {};
  eventArray : Object[] = [];

  constructor(private getTicketMasterData : GetTicketmasterDataService) { }

  buildObject(){
    this.eventObject = {};
    this.getTicketMasterData.getData().subscribe((e: any) =>{
      for (let i = 0; i < 10; i ++){
        let eventObject = {
          name: e._embedded.events[i].name,
          venue: e._embedded.events[i]._embedded.venues[0].name,
          venueAddress: e._embedded.events[i]._embedded.venues[0].address.line1,
          date: e._embedded.events[i].dates.start.localDate,
          description: e._embedded.events[i].info,
          link: e._embedded.events[i].url,
        }
        this.eventArray.push(eventObject);
      }
    });
    return this.eventArray;
    
  }
}
