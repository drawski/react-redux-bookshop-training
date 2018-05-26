# React - redux workshops

## Introduction
 - bookshop app bootstrapped with Create React App (original README available), in addition:
    - state -> redux
    - async -> redux-thunk
    - routing -> react-router v4
    - styling -> plain old css
 - inside `src/backend` dir you can find some fake book data and `fakeApi` that exposes promise-based functions to fetch data
 - you will be using this fake backend just like you would your api/backend, but we won't be doing any actual HTTP calls


## Bootstrapping redux:

## Ex. #1: add redux to the application
 - install redux: `npm i redux`
 - once you have redux create a file `configureStore.js` inside `/redux` folder
 - write a simple `helloWorld` reducer
 - this reducer can simply always return a `Hello world` string, we are only interested in testing the "wiring" of redux,
 so use the `combineReducers` function and pass your test/hello reducer to it, helpful links:
   - <a href="https://redux.js.org/basics/store#source-code" target="_blank">https://redux.js.org/basics/store#source-code</a>
   - <a href="https://redux.js.org/api-reference/combinereducers#reducersindex.js" target="_blank">https://redux.js.org/api-reference/combinereducers#reducersindex.js</a>


 - from this file export a function for building the store rather than the created store (why?), the function should simply return the created store when called
 - the main starting file of your app should be `App.js` so go ahead and create a store instance there, for now just leave it be
 - add the devtools extension:
   - we will be using the most known: <a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank">https://github.com/zalmoxisus/redux-devtools-extension</a>
   - we will be using browser plugin + code written inside our `configureStore` (**don't install npm module!!**)
   - start with the "Basic store" setup (<a href="https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store">https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store</a>)
   
 Finally if everything is done use your redux devtools plugin to inspect if the state has the expected shape.
 
 
## Ex. #2: first module - featured books

We will be more or less following redux "ducks" standard.

Take a look at the ducks repository: <a href="https://github.com/erikras/ducks-modular-redux" target="_blank">https://github.com/erikras/ducks-modular-redux</a>

### 2.1 create the module and reducer
 Often (but not always!) starting with reducer is a good way to approach solving a problem.
 You need to think about what data you will actually need and in what shape it will be easiest to consume and use in your application.
 
 Let's start simple: we just want to display a list of books that are featured.
 The state can look something like:
 ```js
 { featuredBooks: [{book1}, {book2}, /*....*/] }
 ``` 
 
 Every new functionality/piece of data will be scoped into something called a **module**.
 
 Modules will be collecting everything redux related: reducer(s), actions, action types, etc.
 For encapsulation purposes every module should have it's `index.js` file that will export everything to the outside.
 
 Let's move forward:
 - start by creating a fresh folder in `redux/modules/featured`
 - create the reducer: put it in the file `reducer.js` (don't forget about default state!)
 - create `featured/index.js` file and import and export your reducer from index; the trick is to never import your reducer from `reducer.js` outside of this file, `index.js` should be the entry file for everything in this module
 - you will need some action types constants; add a file called `actionTypes.js` and create 3 action types representing pending, success and failure states
 (suggested standard of naming: `FETCH_X_PENDING`, `FETCH_X_SUCCESS`, `FETCH_X_ERROR`)


 - in `configureStore` add the reducer to store by passing it to the argument that goes to `combineReducers`
 - check in the devtools if everything looks ok, you should have a property called `featured` with the value of empty array `[]` 
 
 
### 2.2 async + data
 Let's grab some data!
 We will be using a well known `redux-thunk` library.
 You need to install it using:
 ```
     npm i redux-thunk
 ```
 Thunk will allow us to dispatch functions instead of plain objects and we will use that for async data fetching.
 Now write an action creator (thunk) responsible for getting the data:
  - create `featured/actions.js` file and inside create a `fetchFeatured` function:
    - first dispatch the pending-state action to inform the rest of the app that fetch is happening
    - then use the backend-api to grab featured books and dispatch the success action when they are fetched
    - don't forget to handle error state when fetching
  - your action should also be imported through the `index.js` file for this module
  - before you finish you need to modify `configureStore`:
    - previously the only enhancer we had was the devtools enhancer; now we also need to add some middleware
    - take a look at advanced store setup:
   (<a href="https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup">https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup</a>)
    - define `composeEnhancers` function just like in the docs
    - use it on your middleware, for example:
    ```js
      const middleware = [thunk];

      const enhancer = composeEnhancers(applyMiddleware(...middleware))
    ```

  - suggestion for testing the functionality:
    - go to `App.js` where you have the redux store instance created
    - import (for testing) your thunk action creator and simply add something like `store.dispatch(yourActionCreator())`
    - now your action should be dispatched every time you refresh the page, go to devtools and check if the data is added to the store
   
  
### 2.3 binding redux store to react
  Now finally let's display something on screen
  
  First we need to connect redux to react:
  ```
    npm i react-redux
  ```
  - add `Provider` to your app (<a href="https://redux.js.org/basics/usage-with-react#index-js">https://redux.js.org/basics/usage-with-react#index-js</a>)
  
  React:
   - Let's start with a component called `FeaturedList`
   - use connect to give the component access to the store:
     - help: <a href="https://redux.js.org/basics/usage-with-react#containers-filterlink-js" target="_blank">https://redux.js.org/basics/usage-with-react#containers-filterlink-js</a>
     - write `mapStateToProps`, it should pass `featured` state to the component, the function looks like that:
     

     ```js
      function mapStateToProps(state) {
        return /* state... */
      }
     ```
     - write `mapDispatchToProps`, it should pass `fetchFeatured` with dispatch to the component
     - you can use the shortcut version using object instead of function:
     ```js
       mapDispatchToProps = { fetchFeatured }
     ```
   - remember to actually call the fetch action somewhere to get the data - *what's the proper place?*
   - the `FeaturedList` render method should return a simple wrapping `div` and then `ul > li` with the books list
   - import `Book.js` and render it inside the `li` element

  Finally if everything is ready add your featured list to `App.js` somewhere so that it will show on the screen.
  Here's some helpful css for you to use:
  ```
  .FeaturedList {
      width: 100%;
  }
  
  .FeaturedList .FeaturedList-list {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
  }
  
  .FeaturedList .FeaturedList-list .FeaturedList-list-item {
      margin: 0 10px 10px 0;
  }
  ```
  
 ### Bonus:
 What about `PropTypes`?
 
 
 `PropTypes` is a nice way to add a very simple and basic type definitions to props of your components.
 It's always recommended to add `PropTypes` and even simple ones can help with code/component readability.
 
 Add some to `Featured` component now.
   
 
## Ex. #3: Routing and more views
 What kind of bookshop can exist without categories?! Category list and books-by-category page is our next priority.
 
### 3.1 Categories
 We need a list of categories that we can show on a page and later turn into links to specific category subpage.
 
 Let's create a component called `<Categories/>` (or similar). It should render a list (`ul > li`) of categories
 that you can find in `backend/data.js`.

 Feel free to just copy the names and use them in the component, nothing fancy.
 You may prettify the output strings to have a nice looking category name shown.
 
 Render the component inside the main App.
   
### 3.2 CategoryList
 Next we will need some more redux work.
 
 `<CategoryList/>` (or similar) is a component that should be able to show a list of books by specific category.
 It should fetch books by category and display a list, similar to Featured.
 
 *Note:*
 
 In #2 exercise I was pretty explicit about how exactly the code should be written.
 From now on there will be only generic points telling you what we want to achieve, use your own judgement when writing the implementation ;)
 
 Things to do:
  - write new module very similar to `featured`
  - it needs new actionTypes + actions (thunk) for fetching books by category
  - use `getBooksByCategory` function from the fakeApi file
  - write a new reducer, let's call it simply `categories` or `booksByCategory` for now
  - don't forget to add the reducer to the store
  - create the actual `<CategoryList/>` React component and add connect (with `mapState` + `mapDispatch`), remember about `PropTypes`
  - for now, since we don't have the ability to change categories yet, hardcode one category into the component to see if it works 
   
### 3.3 Routing
 Now it's time to connect our `Categories` menu-like component and the books-by-category view.
 
 Let's install react-router and add it to app. We will be using version 4.

 ```
    npm install react-router-dom
 ```
 
 Docs: <a href="https://reacttraining.com/react-router/web/guides/quick-start/installation" target="_blank">https://reacttraining.com/react-router/web/guides/quick-start/installation</a>
 
 Now let's create the routing:
 - wrap the app with `Router` according to the docs
 - add a route: `/category/:category` and add our component as a handler for it
 - modify the `mapState` function to be able to grab the category name from the rr params (we conveniently called it `category`) <a href="https://reacttraining.com/react-router/web/example/url-params" target="_blank">https://reacttraining.com/react-router/web/example/url-params</a>
 - you should be able to type something similar to `/category/fantasy` in the browser and see the book list
 - now for the final part go back to `Categories` and change every category name that we dispaly into a react-router `Link` component
 - when you will click on categories the books probably won't change, we need to fix this (how?)
 - make sure that new books are fetched by adding the `fetch` in a proper react lifecycle hook
 - congratz!!! it should work ;)

## Ex. #4: 1st refactor (views - React)
 By now you can probably see how similar the `<FeaturedList />` and `<CategoryList />` components are.
 
 When we take a closer look we can see that they both do the exact same thing - show a list of books.
 While the data and styling may differ slightly from one component to another, the logic alone is enough to create a common component.
 
 ### 4.1 container and view components
 This is a nice moment to discuss one of the more common divisions between components used in react-redux project.
 There are different standards of naming them: `container`/`presentation` components or `smart`/`dumb` components,
 but the idea is exactly the same.
 
  - **container/smart components** - data fetching, `connect`-ing to store, logic of the app
  - **presentational/dumb components** - only rendering/displaying the data and views; 90% of the time they should be stateless components
 
 ### 4.2 `<BookList/>` and /screens
  
 Now let us use this knowledge to make rendering our views much better by creating a common `<BookList />` component
 
 - let's create `BookList.js`; make it a "dumb" component that takes a books array as prop and displays it
 - I suggest renaming classes in this component and it's styling to `BookList` to make stuff still look pretty
 - time to introduce another convention - create directory `screens` which will contain the most important container components we have
 - move `<FeaturedList />` and `<CategoryList />` to `screens`
 - refactor both components to use `BookList` component; make them `containers` that fetch data and are connect-ed and provide the data to BookList
 
 #### What do we usually put into /screens, you ask?
 The rule of thumb is: container components that are connected to routes; Sometimes view/dumb components that are paired with containers also go there.
 Sometimes you have to simply make your own `screens` definition ;)
 
## Ex. #5: Book Search
 Time for another crucial feature of any bookstore - search!
 
 We will implement a pretty simplifed "live" search - meaning it will be searching on input change from user and showing the results.
 Since the search results are basically a list of books, we can benefit from the previous refactor and again reuse `<BookList/>` to simplify the code
 
 ### 5.1 UI part:
 - create a new `<Search/>` component, we won't be treating it as a "screen" (but it has to be "smart") since we don't want to make it a route handler
 - it will be responsible for the whole searching functionality:
   - input for typing user search queries
   - fetching books using the search query
   - displaying search results
 - searching for books should be triggered on change when user is typing the phrase, on every keystroke
 
 ### 5.2 state/logic part:
 - use the relevant search function from fakeApi
 - create the module: `/search`:
   - actionTypes
   - action creators (thunk)
   - reducer
  
 Additionally we want to be nice to our backend (even fake one) and not kill it with requests:
 - don't send a search req if length of user typed phrase < some value (ex. 3 chars)
 - how to achieve this? options?
 
## Ex. #6: 2nd refactor (selectors + normalizing state - redux)

### 6.1 selectors
  Selectors are functions that describe how to get specific data from the store.
  They usually get `state` as a first argument and may accept more arguments when needed.
  
  So remember:
  ```
      Selectors are just plain functions.

      In most cases they should be pure.
  ```
  
  Some examples of selectors:
  ```
      (state) => state.foo.bar
      
      (state, thingId) => state.things[thingId]
      
      (state, foo) => {
          if (foo) { return state.something }
          else return state.somethingElse
      }
  ``` 
  
  As a warm up:
   - write a selector inside every module you have (featured, categories, search) for getting data for this module
   - in every major `mapStateToProps` you have use your selectors instead of directly referencing the store state
   - selectors can go into their own file in the module however `reducer.js` is a good place of storing them as named exports alongside the reducer
   - remember about usage of `index` file for the modules (import/export)
   
 ### 6.2 normalizing books state
 
 *Note: #6.2 can be overwhelming, it's important to go step-by-step and not all-in*
 
 #### 1. create new module called `books`
  - write a reducer that will handle 2 fetches for books: category and featured
  - the reducer will store it's state as a JS object, so that we can use it almost like a hash-map of sorts,
  with all the books stored together
  - you might need to transform the data that comes from action a little, use `id` as a key used in the state object
  - add your reducer to the store so that you can check in the devtools if it works
  - the state of your app should now be similar to this:
  ```
   {
      featured: [...],
      byCategory: [...],
      ...
      books: {...}
   }
   ```

 #### 2. rewrite your featured reducer to save only ids of books
  - make the reducer save only ids of books instead of the full collection
  - rewrite your `getFeaturedBooks` selector to properly return full book data; You will need to use knowledge from the `books` module we created

 #### 3. rewrite your categories reducer to save only ids of books
 Repeat what you did in featured.
 
 
 The end?
 
 ...not by a long-shot ;)
 
 Categories and featured reducers know about **the shape of other slices of state** - that's an antipattern!
 
 Inside your module you should never expect the other parts of the app to save state in a certain shape - this should be only
 an implementation detail of that module - something that can change freely if developer decides
 
 Let's fix it:
 - in books module write a selector called `getBooksByIds` taking an array of ids and returning array of books
 - use it in featured/categories instead of referring to state
 
 #### 4. getting rid of standalone `featured` and `categories` module
 Now that state is normalized and most of the actual book data is held in books reducer, why don't we just move
 everything book related into `books` module.
 
 Let's start with `featured`:
 
 - move actionTypes/actions from `featured` to books (names should be unchanged - they correctly refer to `featured` functionality)
 - refactor books reducer to combine both states: books by id and featured, use `combineReducers` from redux
 - it might be helpful to split different reducers into different files and inside your `reducer.js` leave only the combineReducers call - it's up to you
 - refactor selectors (can be tricky!)
 
 Finally do the same with `categories`.
 
 At the end you should be able to completely delete `category` and `featured` modules - `books` module will handle everything. 
  
## Ex. #7: Basket/Cart
 What kind of store could run without a shopping cart? We will now add one and the ability to add books to the basket.
 
 ### 7.1 Add to cart/basket
 What we need is the ability to easily add a book to basket.
 For the purpose of this app a simple button/link element inside `Book` component should be enough. 
 
 - try to design the state shape
 - remember to think about adding multiple copies of a book; how much data do you need to save?
 - prepare the reducer, actionTypes and action creators
 - add button + action to the `Book` component so it is available from every view
 - how to provide the action creator to component? where to bind dispatch?
 
 Inside the reducer handle addition and deletion of item in basket;
 what should happen when you try to add the same item 2nd or 3rd time?

 ### 7.2 Basket view
 We have 2 possible ways to go:
 - add `/basket` route on root level of the app and show a completely new view,
 - just create a new component and show it somewhere on the top as part of the whole app
 
 Doesn't really matter which way you go, just display a very simple list of items in basket with the button to remove them.
 Don't bother with fancy html/css, book name + amount (price if you want) should be fine.
 
 Remove does not have to decrease the number of items, removing a whole basket item will do for our purposes.
 
 ### 7.3 saving basket state between page refreshes
 We don't want to loose the state of basket if user leaves our page. It would be helpful to always have the last version
 saved so that we can immediately show it to user when he returns.
 
 How to persist state in browser? any browser apis that might be helpful?
 
 What needs to be done:
  - we need a stable mechanism for keeping/saving parts of the store
  - newest version of basket state should always be saved - user can exit the page at any moment
  - app should try to load basket state on init and hydrate the store with proper data if saved data is found

## Additional stuff (if extra time available)

### Loading state
 Let's say we are interested in knowing when data is being fetched and we want to show some kind of ui indicator to the user.
 It's a pretty common pattern to show some kind of spinner/loader in this situation.
 Let's introduce this functionality to our code - but if possible le'ts make it reusable so that we can cover every place we load data.
 
 Questions:
  - where and how to keep the state of loading?
  - how to reuse the functionality between different components?
  
 Let's introduce the idea of a higher order component.
 
 A `HoC` is a **function** that takes a *component* and returns a *new component* which usually adds some functionality to the original one.
 
 We will try to write a simple HoC that will get the component and then will be using a `isLoading` prop to either
 show the component that was passed or a loading indicator.
 
 What about the state? Let's leverage redux - the "isLoading" data is hardly different from any other kind of data.
 We can store it, base it's value off of fetching actions and then we can provide the state to HoC.
 
 - write a new `loading` or `uiLoading` reducer. It should store `isLoading` flags for every piece of view you need;
 use the same fetching actions you normally do to set the boolean flag of loading state
 - write a HoC, it should expect that one of the props passed to it is called `isLoading` and render loading indicator
 (a simple text saying "loading" should be enough :) ) or the wrapped component based on the state of boolean flag
 - tie everything together
 
