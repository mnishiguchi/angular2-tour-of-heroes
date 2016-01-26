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
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id:   1,
    name: 'Windstorm'
  }
}
