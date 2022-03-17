# React 101 - Your First Component

## What is React?
React is a JavaScript library initially developed at Facebook. It is used to build components for the "view layer" of a web application, which is basically a fancy way of saying the front end.  

The component aspect of React is one of the reasons it is popular, though it has a number of other benefits.  
To get started I recommend the "Thinking in React" article on the 
[React Docs](https://reactjs.org/docs/thinking-in-react.html).  

## A basic Component
Let's  learn how to implement a basic React Component.    

### Assumptions
Here I will assume you are already set up with yarn/npm. You can check by opening your terminal and running `yarn -v` or `npm -v`.  
You should get a version number back, for example I get "6.14.11" when I run `npm -v`.  

I will also assume you have basic JavaScript knowledge. 
Mainly: 

 - ES6 function syntax
 - Import / Export

## Let's Go! 
Open a terminal to where you would like to create the app and run  
`npx create-react-app my-first-component`   

Go [here for information on npx](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/).  

[Create React App](https://create-react-app.dev/) will create a template for us to build our React app, with webpack, babel and a package.json file all done for us.  

You should see a loading bar in the terminal, sometimes it can take a while to complete. 

When it is done (You should see a 'Success!' message), move into the new project directory:  
`cd my-first-component`  

Open the project in your favourite text editor - I am using VS Code so I will run  
`code .`  

To view the project in the browser you can run `npm run start`
You should see a spinning React logo!

## Some cleanup
Let's get rid of some of the boilerplate files we don't need. 

expand the `public/` directory and remove  

 - favicon.ico
 - logo192.png
 - logo512.png

expand `src/` directory and remove 

 - App.css
 - App.test.js
 - logo.svg

If you check the browser now you will see some errors, but don't worry we'll fix those in a second. 

Open `App.js` and remove everything between the `<div>` tags, but leave the `<div>` tags there

Also remove line 1 and 2:  
`import logo from  './logo.svg';`
`import  './App.css';`

All clean!  
No more errors but there's a blank screen now... 

## Our first component
Let's start by learning what a component is, to do this we'll first fill `App.js` with some content - we'll start with a navbar.  

Between the `<divs>` let's insert some markup for a basic nav: 

![JS code.](/images/nav-comp-1.png "This is a sample image.")

Inside `index.css` let's add some styling: 

![CSS code.](/images/nav-css-1.png "This is a sample image.")


Great, we have a nav! Let's turn it into a component.  
A component is basically taking a piece of code and putting it into it's own file so we can import it and use it as needed. 

### Create a components directory
`mkdir src/components`

### Create a Nav component directory
`mkdir src/components/Nav`

### Create a Nav JS file
`touch src/components/Nav/Nav.js`

### Create a Functional Component 
Modern React uses something called "Functional Components". 
The syntax looks exactly like a normal ES6 function, though we return the code we want to render to the screen. 

Create a function called `Nav` and in the return statement, add the nav code we put into `App.js` (You can remove the nav code from `App.js`. 

![JS code.](/images/nav-comp-2.png "This is a sample image.")

### Move the Nav styles to the component directory
`touch src/components/Nav/NavStyle.css`

Cut the nav styles we added to index.css and move it into the `NavStyle.css` file we just created.

### Import the styles into the Nav Functional Component file
On line 1 of `src/components/Nav/Nav.js`: 
`import  './NavStyle.css';`

If everything went to plan then your browser page should now be a blank white page again... how underwhelming. 

### Import the Component 

Ok now, in `App.js` we can import the Nav Component

On line 1 of `src/components/Nav/Nav.js`: 
`import Nav from  './components/Nav/Nav';`

Still nothing on the page yet... 

But...

Inside of the `<div>`'s we can import a component like this: 
`<Nav />`

Boom! 

Our Nav is back! 

Your `App.js` file should now look like this: 

![HTML code.](/images/app-js-final.png "This is a sample image.")

## Next Steps
So this was a beginner guide on how to create a component in React.  
A challenge for you: Can you create a Header component to go under the nav?  
Maybe an 'About Me' section? 

Remember to build them in the new Components directory then import them into App.js

Good luck! 
