import { Injectable } from '@angular/core';
import { GetTicketmasterDataService } from './get-ticketmaster-data.service';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';

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
          isInBucket : false
        }
        this.eventArray.push(eventObject);
      }
    });
    return this.eventArray;
    
  }

  // this is a temp method. Just being used to work on the BucketlistPageComponent
  // delete when real method is created
  getBucketList(){
    return[ {
       name : "Fake Event 1",
       venue: "fake venue 1",
       venueAddress: "100 1st Street",
       date : "today",
       description : "An blandit imperdiet interpretaris nec. Eos iriure repudiare ex, at quot repudiandae has. Has putent quaestio inimicus no, ei eos unum aeterno. Vis error volutpat ad.",
       link : "https://google.com",
       isInBucket : true,
      },

      {
        name : "Fake Event 2",
        venue: "fake venue 2",
        venueAddress: "200 2nd Street",
        date : "today2",
        description : "An blandit imperdiet interpretaris nec. Eos iriure repudiare ex, at quot repudiandae has. Has putent quaestio inimicus no, ei eos unum aeterno. Vis error volutpat ad.",
        link : "https://google.com",
        isInBucket : true,
       }
    ];
  }
}
