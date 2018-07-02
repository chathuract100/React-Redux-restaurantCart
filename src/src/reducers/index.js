import {combineReducers} from 'redux'
import FoodReducer from '../data/foodItems-data'
import CartReducer from './cart'

const allReducers = combineReducers({
    fooditems: FoodReducer,
    cartitems: CartReducer
})

export default allReducers;