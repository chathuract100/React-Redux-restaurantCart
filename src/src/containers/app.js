import React from 'react'
import MenuList from '../components/menu-list'
import Cart from '../components/cart'
  
const app = () => (
<div>
    <h1>Transylvania hotel</h1>
    <hr/>
    <div className="main-left">
        <h2>Menu</h2>
        <MenuList/>
    </div>

    <div className="main-right">
        <h2>Order Summary:</h2>
        <Cart/>
    </div>
</div>
)

export default app;