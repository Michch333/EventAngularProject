import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTicketmasterDataService {

  constructor(private httpRequest : HttpClient) {
   }

  apiCallUrl = '';

  getData(city: string, startDate : string, keyword : string) {
    if (keyword.length > 0) {
      keyword = `&keyword=${keyword}`;
    }
    else {
      keyword = '';
    }

    if (city.length > 0) {
      city = `&city=[${city}]`;
    }
    else {
      city = '';
    }

    if (startDate.length > 0) {
      startDate = `&StartDateTime=${startDate}T11:32:00Z`;
    }
    else {
      startDate = '';
    }

    this.apiCallUrl = `https://app.ticketmaster.com/discovery/v2/events.json?${keyword}${city}${startDate}&apikey=ZX5svVHj0qJ8AVTz2KqWdiChU2zmAAU6`;
    
    console.log(this.apiCallUrl);

    
     return this.httpRequest.get(this.apiCallUrl);
  }

  // getSuggestions(keyword : string){
  //    return this.httpRequest.get(`https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=ZX5svVHj0qJ8AVTz2KqWdiChU2zmAAU6&keyword=${keyword}&geoPoint=dps&radius=10&unit=miles&locale=en`);
  // }
}
