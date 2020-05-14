### Project Structure 
1. __components__  
    * Card  - 
        * CardColumns
    * PortfolioChart
    * Spinner


2. __dump__   
3. __assets__
    * icons
    * img
4. __store__
    * actions
    * reducers
5. __UI__
    * Home
        * DrawerContent
  
### UI
1. __Home__ (Home Page) =>
    * _Child Components_
        * Card
        * DrawerContent
        * PortfolioChart
    * _props_
        * From redux
            1. data , refreshData, setUpData, updateData
    * _functions_
        * toggleDrawer - Toggle side drawer
        * handleHamburgerClick - Click event on top right menu      button (runs toggleDrawer)
        * handleDrawerSubmit - handle Drawer Submission


### dump
1. __file__ =>
    * data.js - mock data


### assets
1. __icons__
    * fontawesome.min.css -
         font-awesome icon file     
2. __img__
    * logo and caret-down svg


### Components
1. __Spinner__ (Css Loader)
2. __PortfolioChart__ (Pie Chart ) =>
    * _props_
        * From redux
            1. data , chartData
3. __Card__ (Single Card on Home Page) =>
    * _Child Components_
        * Column1
        * Column2
        * Column3
        * Column4
        * Column5
    * _props_
        * From Home(UI)
            1. data


## Columns (components/Card/CardColumns)
1. __Column1__
    * _props_
        * From Card(components)
            1. data.scrip, data.price 
2. __Column2__
    * _props_
        * From Card(components)
            1. data.quantity, data.avg_cost, data.invested_amount
3. __Column3__
    * _props_
        * From Card(components)
            1. data.quantity, data.price, data.percent_portfolio_value
4. __Column4__
    * _props_
        * From Card(components)
             1. data.unrealized_PL, data.invested_amount, data.market_value 
5. __Column5__ (Buy & Sell button)


### store (Redux store)
1. __configureStore.js__ (configuring store)
    * Middlewares
        1. thunk (redux-thunk)

2. __actions__ (redux actions)
    * root.js (root actions)
    * index.js (export all actions)

3. __reducers__ (redux reducer functions & store)
    * root.js (root reducers)
    * index.js (combine all reducers)


### actions (Redux actions)  
1. __root.js__ 
    * _actions_ 
        * SET_ALL_DATA :     
            Get data from source and save in redux store
        * SET_CHART_DATA :  
            Set data for chart i.e. MF and ETF percent
        * GET_SCRIP :  
            Get data by providing name of scrip
    * _actionCreators_
        * getScrip 
            payload : scrip ( name of scrip)
            type : GET_SCRIP
        * getAlldata : 
            type : SET_ALL_DATA, SET_CHART_DATA 
        * updateData (update data) :
            type : SET_ALL_DATA, SET_CHART_DATA
    * _util functions_
        * convertToFloat 
            input : number, stringified number
            return : float num ( 2 decimal digits )
        * totalInvestedAmount
            input : array
            return : sum total of invested_amount
        * findDynamicValues 
            input : array (invested_amount, quantity, price)
            return : calculate other dynamic values 



### reducers (Redux reducers )
1. __root.js__
    * state : 
        * data (fetched data for cards)
        * currentScrip (currently selected scrip data )
        * chartData (MF and ETF percent)
        * refreshData (whether to refresh cards)








<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
