import { Injectable, ɵConsole } from '@angular/core';
import { GetTicketmasterDataService } from './get-ticketmaster-data.service';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';

interface Event {
  name: string,
  venue: string,
  venueAddress: string,
  date: string,
  description: string,
  link: string,
  img : string,
  isInBucket : boolean,
  eventID: string,
  eventTime: string,
};

@Injectable({
  providedIn: 'root'
})
export class BuildEventService {


  eventArray : Object[] = [];
  keyword : string;
  startDate : string;
  city : string;
  
  eventObjects : any;
  suggestObjects : any;

  constructor(private getTicketMasterData : GetTicketmasterDataService) { }

  buildObject(city,startDate, keyword){
      this.getTicketMasterData.getData(city,startDate,keyword).subscribe((e:any) =>{
        this.eventObjects = e._embedded.events;

        // console.log(this.eventObjects);

          for (let event of this.eventObjects) {
            
            let returnedEvent : Event = {
              name: "",
              venue: "",
              venueAddress: "",
              date: "",
              description: "",
              link : "",
              img : "",
              isInBucket : false,
              eventID : "",
              eventTime : ""
            } ;

            returnedEvent.name = event.name;
            returnedEvent.venue = event._embedded.venues[0].name;
            returnedEvent.venueAddress = event._embedded.venues[0].address.line1;
            returnedEvent.date = event.dates.start.localDate;
            returnedEvent.description = event.info;
            returnedEvent.link = event.url;
            returnedEvent.img = event.images[0].url;
            returnedEvent.eventID = event.id;
            returnedEvent.eventTime = event.dates.start.localTime;
            this.eventArray.push(returnedEvent);
          }
      });
       //console.log(this.eventArray);
      return this.eventArray;
  }

  // buildSuggestion(keyword : string){
  //   this.getTicketMasterData.getSuggestions(keyword).subscribe((e:any) => {
  //     this.suggestObjects = e._embedded.events;

  //     console.log(this.suggestObjects);

  //   })
  // }

  getResults(){
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
