export const addToCart = (foodItem) => {
    console.log("adding the food item: ", foodItem.title)
    return{
        type: "ADD_TO_CART",
        payload: foodItem
    }
}