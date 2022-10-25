import { Component, OnInit } from '@angular/core';
//display the message from HeroService
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //display the message from HeroService
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
