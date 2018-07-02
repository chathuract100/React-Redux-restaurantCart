const initialState = {
    addedItems: []
  }

export default function (state = initialState, action){
    switch(action.type){
        case "ADD_TO_CART":
        console.log({
            ...state, addedItems: [
                ...state.addedItems, action.payload
            ]
        } );
            return{
                ...state, addedItems: [
                    ...state.addedItems, action.payload
                ]
            } 
            break;
            
        default:
            return state
        
    }

    return state;
}