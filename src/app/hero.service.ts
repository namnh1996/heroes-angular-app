import { Injectable } from '@angular/core';
import { HEROES } from './mock-heors';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    //send a message from HeroService
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
