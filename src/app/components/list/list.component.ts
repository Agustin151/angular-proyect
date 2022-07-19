import { Component, OnInit } from '@angular/core';
import { DataService } from './data..service';
import { Ticket } from '../models/ticket/ticket.inteface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tickets:Ticket[];
  constructor(private dataSvc: DataService) {
    this.tickets = [];
  }

  ngOnInit() {
    this.dataSvc.getAllTickets().subscribe(data => (this.tickets = data));
  }
}
