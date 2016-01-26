# angular2-tour-of-heroes
- https://angular.io/docs/ts/latest/tutorial/toh-pt1.html

==

## String interpolation
- the "interpolation" form of one-way data binding
```html
<h1>{{ title }}</h1>
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

