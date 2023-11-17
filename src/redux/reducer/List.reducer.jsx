export function listReducer(state = [],action) {
    

switch (action.type) {
    case "ADD_TO_List":
        if(!state.includes(action.payload)){
          return [...state, action.payload]  
        }else{
            alert("Please add a number not listed")
        }
    

    case  "REMOVE_FROM_LIST":
    return state.filter((item,index)=> index !== action.payload);

    default:
        return state;
       
}}