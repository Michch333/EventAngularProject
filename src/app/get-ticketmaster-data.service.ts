import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTicketmasterDataService {

  constructor(private httpRequest : HttpClient) {
   }


   getData() {
     return this.httpRequest.get('https://app.ticketmaster.com/discovery/v2/events/vvG1OZ4mip4JKI.json?apikey=ZX5svVHj0qJ8AVTz2KqWdiChU2zmAAU6');
   }
}
