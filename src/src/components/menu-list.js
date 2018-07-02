import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addToCart} from '../actions/index'

class MenuList extends Component {

    createMenuItems(){
        return this.props.fooditems.map((item) => {
            return (
                <div className="menuItem" key={item.id}>
                    <img src={item.thumbnail} alt={item.title}/>
                    <h2>{item.title}</h2>
                    <h4>{item.description}</h4>
                    <h4>Price: {item.price}</h4>
                    <h4>Categories: {item.Categories.join(',')} </h4>
                    <button onClick={() => this.props.addToCart(item)} className="cartButton">Add to Cart</button>
                </div>
            );
        });
    }
    

    render() {
        return(
            <div>
                {this.createMenuItems()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        fooditems: state.fooditems
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToCart: addToCart}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuList);