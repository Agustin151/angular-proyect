import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket/ticket.inteface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = "http://localhost:8000/api/tickets"

  constructor(private http: HttpClient) { }

  getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.urlAPI)
  }
}

