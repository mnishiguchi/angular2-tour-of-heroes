import { HEROES }     from './mock-heroes';  // An array of Hero objects
import { Injectable } from 'angular2/core';  // @Injectable() decorator

@Injectable()
export class HeroService {

  getHeros() {

      return HEROES;
  }

}
