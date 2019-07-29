import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTicketmasterDataService {

  constructor(private httpRequest : HttpClient) {
   }

  getData(city: string, startDate : string, keyword : string) {
    keyword = `&keyword=${keyword}`;
    city = `&city=[${city}]`;
    startDate = `&StartDateTime=${startDate}T11:32:00Z`;
    
     return this.httpRequest.get(`https://app.ticketmaster.com/discovery/v2/events.json?&marketId=7${keyword}${city}${startDate}&apikey=ZX5svVHj0qJ8AVTz2KqWdiChU2zmAAU6`);
  }

  // getSuggestions(keyword : string){
  //    return this.httpRequest.get(`https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=ZX5svVHj0qJ8AVTz2KqWdiChU2zmAAU6&keyword=${keyword}&geoPoint=dps&radius=10&unit=miles&locale=en`);
  // }
}
