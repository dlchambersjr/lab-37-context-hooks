## Warm-up - Context and Hooks

### Author: David Chambers

### Links and Resources
* [REPO](https://github.com/dlchambersjr/lab-37-context-hooks)

### Modules
#### `index.js`

###### `class Main -> renders <App/>`
entry point to the app.

#### `app.js` -> central hub for the app
##### Exported Values and Methods
Renders `<Content/>` and `<Clicker/>`

#### `settings/context.js` -> GenericProvider class
##### Exported Values and Methods
Exports state in a context available to other components.

###### `class GenericProvider -> state`
Establishes the starting state of the application

###### `changeNumberTo()` -> random number`
Updates state.number to a randomly generated number.

###### `changeColorTo()` -> random hex color`
Updates state.color to a randomly generated hex color.

#### `content.js` -> renders content
##### Exported Values and Methods
Exports JSX to be rendered by `<App/>` in the DOM. It also allows for state to be consumed in the JSX.

#### `button.js` -> a button
##### Exported Values and Methods
Exports JSX to be rendered by `<App/>` in the DOM. It also allows for state to be consumed in the JSX.

### Running the app
* `npm start`
* or visit the [DEPLOYED version](http://dc-week7-fullstack-project.s3-website-us-west-2.amazonaws.com/)

#### UML
* [Context and Hooks UML](https://raw.githubusercontent.com/dlchambersjr/lab-37-context-hooks/master/lab37-context-uml.jpg)