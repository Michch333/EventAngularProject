import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTicketmasterDataService {

  constructor(private httpRequest : HttpClient) {
   }

  getData(keyword, city) {
    keyword = `&keyword=${keyword}`;
    city = `&city=[${city}]`;
    // startDate = `&onsaleOnAfterStartDate=${startDate}`;
     return this.httpRequest.get(`https://app.ticketmaster.com/discovery/v2/events.json?${keyword}${city}&apikey=ZX5svVHj0qJ8AVTz2KqWdiChU2zmAAU6`);
  }
}
