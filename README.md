# angular2-tour-of-heroes
- https://angular.io/docs/ts/latest/tutorial/

==

## Data binding

### String interpolation

- the "interpolation" form of one-way data binding
```html
<h1>{{ title }}</h1>
```

### The Event Binding
- () 
- Identifies the element’s event as the target
- e.g., `(click)="onSelect(hero)"`


### The Property Binding
- []
- Data flows one way from the data source to a property of class
- Must **declare a target property** to be an input property
- e.g., `[class.selected]="hero === selectedHero"`

#### How to declare a target property (a couple of ways)
- adding an inputs array to the @Component metadata
  + `inputs: ['hero']`
- the @Input() decorator





### Two-way data binding

```html
  <div>
    <label>
      One-way data binding:
      <input type="text"
        value="{{ hero.name }}"
        placeholder="name">
    </label>

    <label>
      Two-way data binding:
      <input type="text"
        [(ngModel)]="hero.name"
        placeholder="name">
    </label>
  </div>
```

==

## Interface vs Class

- Our choice depends on how we intend to use the data type to be defined.

**interface**
- For a datatype with simple properties
- If we only need type checking
- lighter weight than class
- Transpiling an interface produces — nothing.

**class**
- For a datatype with logic and behavior beyond simple properties
- Transpiling a class to JavaScript produces code

==

## The * prefix
- indicates that the element and its children **constitute a master template**.

==

## The # prefix
- Creates a local template variable.
- Can reference this variable within the template and access its properties.

==

## The structural directives
- e.g., `ngIf` and `ngFor`
- can change the structure of portions of the DOM
- https://angular.io/docs/ts/latest/guide/structural-directives.html
- https://angular.io/docs/ts/latest/guide/template-syntax.html#!#directives

==
