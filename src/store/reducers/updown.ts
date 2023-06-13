interface IAction {
    type : string
}

const initialState = 1;
export const changeTheNumber = (state=initialState,action:IAction) =>{
    switch(action.type) {
        case "INCREMENT" :
            return state + 1
        case "DECREMENT" :
            return state - 1
        default : 
            return state
    }
}