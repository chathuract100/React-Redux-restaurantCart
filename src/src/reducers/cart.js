export default function (state=null, action){
    switch(action.type){
        case "ADD_TO_CART":
            return action.payload;
            break;
    }

    return state;
}