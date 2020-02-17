import { ADD_MANTRA, ADD_KARMA } from "./actions";

export function mantras(state=['a', 'b', 'c'], action) {
    const newState = [ ...state ];
    switch (action.type) {
        case ADD_MANTRA:
            newState.push(action.payload.mantra);
            break;
        default:
            break;
    }
    return newState;
}

export function karma(state={}, action) {

    switch(action.type) {
        case ADD_KARMA:
            // console.table(action.payload)
            console.table(state);
            return {
                ...state,
                ...action.payload
            }
            break;
        default:
            return state;
    }
}

// export function mantra(state=[], action) {
    
//     switch (action.type) {
//         case ADD_MANTRA:            
//             return [ 
//                 ...state,
//                 action.payload.mantra
//             ];
//             // return state.concat(action.payload.mantra);
//             break;
//         case DEL_MANTRA: 
//             return [
//                 ...state                
//             ]
//         default:
                // return state;
//             break;
//     }    
// }