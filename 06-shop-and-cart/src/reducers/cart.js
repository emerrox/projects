export const cartReducer = (state, action)=>{
        
    const {type,payload} = action
    
    switch(type){
        case 'ADD_TO_CART': {
            const inde = state.findIndex(obj => obj.id === payload.id)
            
            if (inde >= 0) {
                let newCart = structuredClone(state)
                newCart[inde].cant = newCart[inde].cant+1
                return newCart
            }
            
            return[...state,
                {
                    ...payload,
                    cant: 1
                }
            ]
        }
        
        case 'REMOVE_FROM_CART': return state.filter(obj => obj.id != payload)
        
        
    }
    
    
    return state
}