import { Component } from 'angular2/core';
// import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


/**
 * Defines a Hero interface with id and name properties.
 */
interface Hero {

  id: number;
  name: string;

}


/**
 * Defines the AppComponent, which is the root component.
 */
@Component({

  selector:    'app',
  templateUrl: 'app/app.component.html',
  styleUrls:   [ 'app/app.component.css' ]

})
export class AppComponent {

  // Expose the public properties for binding.
  public title  = 'Tour of Heroes';
  public heroes = HEROS;
  public selectedHero: Hero;


  // ---
  // PUBLIC METHODS
  // ---


  onSelect( hero: Hero ) {

    this.selectedHero = hero;

  }


  isSelected( hero: Hero ) {

    return hero == this.selectedHero;

  }
}


// Define mock heroes that is an array of type Hero.
// We would fetch this list of heroes from a web service in real life.
const HEROS: Hero[] = [

  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }

];
