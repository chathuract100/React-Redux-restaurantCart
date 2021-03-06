import React, {Component} from 'react'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Cart extends Component {

    createCart(){
          const hasCartitems = this.props.cartitems.addedItems.length > 0;

          const nodes = hasCartitems ? (
            this.props.cartitems.addedItems.map(item => 
                <div className="cartItem" key={item.id}>
                    <b>{item.title} </b>
                    <div className="cart-buttons-container">
                        <button>-</button>
                        <button>+</button>
                    </div>
                </div>
                )
            ): (
                <em>Please add some menu items to the cart.</em>
            );

            const total = hasCartitems ? this.props.cartitems.addedItems.map(item => item.price).reduce((prev, next) => prev + next) : 0 ;

        return (
            <div className="cart-right">
                <h4>Total amount: {total}</h4>
                <div>{nodes}</div>
            </div>
        )
    }
    
    render() {
        return(
            <div>
                {this.createCart()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cartitems: state.cartitems
    }
}

// function matchDispatchToProps(dispatch){
//     return bindActionCreators(dispatch)
// }

export default connect(mapStateToProps)(Cart);