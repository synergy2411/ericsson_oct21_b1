# Git Repo Link - https://github.com/synergy2411/ericsson_oct21_b1

# JavaScript - ECMA 2015 -> ES6/ES2015
- Vanilla JavaScript

# Browser Environment - Client Side JavaSCript 
# Server Environment - Server Side JavaScript (Node Runtime)

# Node installer (https://nodejs.org)
- Node Runtime Environment
- Node Package Manager
- Node Native Modules

# VS Code Installer (https://code.visualstudio.com/download)

# What is ES6/2015?
- ECMA Script
- Latest JavaScript
- Block scoping - let and const
- Arrow Functions
- Rest/Spread Operators
- Class
- Modules
- Map & Set
- Destructuring of Array / Object
- Default Parameters
- Template Literals (back tick)


# JavaScript Array Functions
- map
- some
- filter
- find
- findIndex
- forEach
- every

# Asynchronous JavaScript
- Don't wait
- Non blocking






# What is React ?
- JavaScript Library to build UI (M'V'C)
- Single Page App
- Mobile App (React Native)
- Made by Facebook
- Fast UI Experience
- Reusable Components
- Light-weight
- Virtual DOM - abstraction of Real DOM / Clone / Copy - in memory
- Real DOM - created by HTML Elements
- VDOM - Pure JavaScript representation of Actual DOM

# React and Other Libraries/Frameworks
- Angular* : Components, Modular Approach, MVC, 2 way data binding, XHR Calls, DOM Manipulation, Animation, DI, SPA, Lazy loading, AoT Compilation, Tree-shaking, Shadow DOM etc
    - Tree-shaking : remove the unused code;
     : Introduced v6 - 

     Services : self injected -  @Injectable({ provideIn : LazyModuleClassName | 'root' | 'platform' | 'any' })
     @NgModule({
         providers :    [ServiceName]
     })
     Services are singleton, but within the scope you inject them.

- VueJS (Evan You): Declaration, VDOM, Template driven, State Management, SPA, 2 way data binding etc
- Next : Static Web pages, rendered on Server
- jQuery : DOM Manipulation, Animation, AJAX
- flutter : Mobile App development
- Knockout : MVVM, 2 way data-binding
- Backbone : client side MVC
- Ember* : frequent changes in API
- Mootools : 
- Polymer : Custom Components
- D3 : Great for Charts
- ExtJS : build beautiful UI


# npx create-react-app <app-name>
- cd <app-name>
- npm start

# Component -> reusable piece of code; Thinking in React way

# ATOMIC Design
- Atoms : Smallest unit; button, input, div, p etc
- Molecules : Combo of Atoms e.g. seachbar -> inputbox + button
- Organism : Combo of Molucles e.g. complete form, navbar -> Nav Links + Searchbar
- Templates : single unit on page
- Pages : complete page


# Types of Component
- Stateful | Stateless
- Container | Presentational
- Smart | Dump
- Controlled | Uncontrolled


# React Hooks (v16.8) : used inside functional components
- useState
    : Whenever currentState depends on the previousState, always use setFunction() syntax

# to generate unique IDs
- npm install uuid

# Main job of React - to Update the UI and if model change, re-render it;
# Side Effect / Effect -> Other Operators - making XHR Call, reading, writing, changing the state etc


When to use Classes for creating Component
    - LifeCycle Methods
    - State Management

When to use Functions for creating Component
    - useEffect() - componentDidMount, ComponentDidiUpdate, componentWillUnmount
    - useState()

# Prior to v16.8
- Functional Components - Stateless, Presentational, Dump
- Class Component - Stateful, Container, Smart

# to install PropTypes > npm install prop-types








# useEffect() without dependency 
    - useEffect will run after initial rendering, and also after any state change

# useEffect() with empty dependencies =[] (componentDidMount)
    - useEffect will run only after initial rendering

# useEffect() with some dependency = [deps] (componentDidUpdate)
    - userEffect will run after initial rendering, after all changes in dependency

# useEffect() return clean-up function
    - Will NOT fire after the initial rendering
    - For subsequent rendering, clean-up function will fire before the useEffect() callback function
    - Before unmounting the component, useEffect() will call clean-up function (componentWillUnmount)


# useReducer() - to manage complex state
    - Redux pattern

# useState vs useReducer


# useContext() - 
    - Context API -> "Props drilling" -> 

# useContext() - bi-directional
# Redux Pattern - uni-directional | one source of truth


# React.memo() : memorize the value, re-renders the UI
    : Change Detection - Default Stragtegy
# useCallback() 
    : points to same memory location; does NOT create the callback function in memory after re-rendering.

# useMemo() => React.memo() + useCallback()



# What is SPA ?
- Single Page App
- Does not refresh / reload the browser
- Less server interaction
- Efficient user interaction


-> User clicks some link -> Change the URL -> Render some Component

- http://our-doamin.com/posts   -> Posts Component
- http://our-doamin.com/welcome -> Welcome Component
- 


# to work with SPA (React Router) -> npm install react-router-dom

- Route
- BrowserRouter
- Link
- Redirect
- Prompt : canDeactivate
- Location
- History


# to create package.json > npm init -y

# to integrate react with redux :
> npm install redux react-redux

# to install Thunk > npm install redux-thunk


# build > npm run build -> /build/static_assets

- Firebase Hosting Service
- Gmail Credentials

# Firebase Hosting
- npm install firebase-tools -g
- firebase login
- firebase init
    - What do you want to use as your public directory? build
    - Configure as a single-page app (rewrite all urls to /index.html)? Yes
    - Set up automatic builds and deploys with GitHub? No
    - File build/index.html already exists. Overwrite? No
- firebase deploy


# Deploed URL : https://react-notes-app-5ba59.web.app












# styledComponent
# React - Redux boilerplate 