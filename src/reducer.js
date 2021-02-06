//reducer params: old state and action

const reducer =  (state , action) =>{
if (action.type === 'CLEAR_CART' ){
    console.log("clearing...");
    return {...state , cart:[]}
}

if (action.type === 'INCREASE' ){
    return {...state , 
       total :state.total+1 ,
       cart: state.cart.map( (item)=>{
           if (item.id ===action.payload){

               return {...item , amount:item.amount+1};
           }
           return item;

       } ) ,
       
       }
}


}

export default reducer;
