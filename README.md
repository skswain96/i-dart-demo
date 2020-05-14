Project Structure


components

Card  -

CardColumns


PortfolioChart
Spinner



dump


assets

icons
img



store

actions
reducers



UI

Home

DrawerContent






UI


Home (Home Page) =>


Child Components

Card
DrawerContent
PortfolioChart



props

From redux

data , refreshData, setUpData, updateData





functions

toggleDrawer - Toggle side drawer
handleHamburgerClick - Click event on top right menu      button (runs toggleDrawer)
handleDrawerSubmit - handle Drawer Submission






dump


file =>

data.js - mock data




assets


icons

fontawesome.min.css -
font-awesome icon file



img

logo and caret-down svg




Components


Spinner (Css Loader)

PortfolioChart (Pie Chart ) =>


props

From redux

data , chartData







Card (Single Card on Home Page) =>


Child Components

Column1
Column2
Column3
Column4
Column5



props

From Home(UI)

data








Columns (components/Card/CardColumns)


Column1


props

From Card(components)

data.scrip, data.price







Column2


props

From Card(components)

data.quantity, data.avg_cost, data.invested_amount







Column3


props

From Card(components)

data.quantity, data.price, data.percent_portfolio_value







Column4


props

From Card(components)

data.unrealized_PL, data.invested_amount, data.market_value







Column5 (Buy & Sell button)


store (Redux store)


configureStore.js (configuring store)

Middlewares

thunk (redux-thunk)





actions (redux actions)

root.js (root actions)
index.js (export all actions)



reducers (redux reducer functions & store)

root.js (root reducers)
index.js (combine all reducers)




actions (Redux actions)


root.js


actions

SET_ALL_DATA :
Get data from source and save in redux store
SET_CHART_DATA :
Set data for chart i.e. MF and ETF percent
GET_SCRIP :
Get data by providing name of scrip



actionCreators

getScrip
payload : scrip ( name of scrip)
type : GET_SCRIP
getAlldata :
type : SET_ALL_DATA, SET_CHART_DATA
updateData (update data) :
type : SET_ALL_DATA, SET_CHART_DATA



util functions

convertToFloat
input : number, stringified number
return : float num ( 2 decimal digits )
totalInvestedAmount
input : array
return : sum total of invested_amount
findDynamicValues
input : array (invested_amount, quantity, price)
return : calculate other dynamic values






redcers (Redux reducers )


root.js

state :

data (fetched data for cards)
currentScrip (currently selected scrip data )
chartData (MF and ETF percent)
refreshData (whether to refresh cards)
