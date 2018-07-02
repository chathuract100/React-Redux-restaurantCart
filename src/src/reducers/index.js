import {combineReducers} from 'redux'
import FoodReducer from '../data/foodItems-data'
//import FoodReducer from './reducer-fooditems'

const allReducers = combineReducers({
    fooditems: FoodReducer  
})

export default allReducers;