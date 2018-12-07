## Full-Stack-Project(react)

### Author: David Chambers

### Links and Resources
* [REPO](https://github.com/dlchambersjr/lab-37-context-hooks)


### Modules
#### `index.js`

###### `class Main -> renders <App/>`
entry point to the app.

#### `app.js` -> central hub for the app
##### Exported Values and Methods
Exports the results of the render() in the app class

###### `componentDidMount() -> JSON data`
Goes to a serve and retrieves content to passed into the Page component.

###### `render(array) -> jsx output`
creates out put that contains Header, Page, and Footer Components.

#### `.js` -> central hub for the app
##### Exported Values and Methods
Exports the results of the render() in the app class

###### `componentDidMount() -> JSON data`
Goes to a serve and retrieves content to passed into the Page component.

###### `render(array) -> jsx output`
creates out put that contains Header, Page, and Footer Components.

### Components
#### `header.js` -> exports props.children

#### `page.js` -> content from <Deck>
##### Exported Values and Methods
The exported value from Deck is provided via props from Page and the content data passed down from App

#### `deck.js` -> content from <Child>
The exported value from Card is provided via props from Deck and the content data passed down from Page

#### `card.js` -> content received from <Deck>
Renders the props that have been based in from Deck

#### `footer.js` -> exports props.children

### Running the app
* `npm start`
* or visit the [DEPLOYED version](http://dc-week7-fullstack-project.s3-website-us-west-2.amazonaws.com/)

#### UML
* [Context and Hooks UML](https://raw.githubusercontent.com/dlchambersjr/full-stack-project-server/master/uml-react.jpg)