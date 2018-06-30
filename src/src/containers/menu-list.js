import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class MenuList extends Component {

    createMenuItems(){
        return this.props.fooditems.map((item) => {
            return (
                <div class="menuItem" key={item.id}>
                    <img src={item.thumbnail} alt={item.title}/>
                    <h2>{item.title}</h2>
                    <h4>{item.description}</h4>
                    <h4>Price: {item.price}</h4>
                    <h4>Categories: {item.Categories.join(',')} </h4>
                    <button class="cartButton">Add to Cart</button>
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

export default connect(mapStateToProps)(MenuList);