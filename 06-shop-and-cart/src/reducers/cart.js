export const cartReducer = (state, action)=>{
        
    const {type,payload} = action
    
    switch(type){
        case 'ADD_TO_CART': {
            
            const inde = state.findIndex(obj => obj.id === payload.id)
            
            if (inde >= 0) {
            console.log('asfas');

                let newCart = [...state]
                newCart[inde].cant = newCart[inde].cant+1
                return newCart
            }
            
            return[
                ...state,
                {
                    ...payload,
                    cant: 1
                }
            ]
        }
        
        case 'REMOVE_FROM_CART': return state.filter(obj => obj.id != payload)
        
        case 'SUBSTRACT_CANT': {
            let newCart = [...state]
            if (newCart[state.findIndex(obj => obj.id === payload)].cant <= 1){
                return state.filter(obj => obj.id != payload)
            }else{
                newCart[state.findIndex(obj => obj.id === payload)].cant--
                return newCart
            }
        }
        
    }
    
    
    return state
}