console.clear(); 

const { createStore, combineReducers } = Redux; 

// People dropping of forms 
const CreateClaim = (name, amountOfMOneytoCollect) => {
  return { //this is the form 
    type: 'CREATE_CLAIM', 
    payload: { 
    name: name,
    amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
}; 

const createPolicy = (name) => { 
  return { 
    type: 'CREATE_POLICY', 
    payload: { 
      name: name, 
    amount: 20
    }
  }; 
}; 

const deletePolicy = (name) => { 
  return { 
  type: 'DELETE_POLICY'. 
   payload: {
    name: name, 
    }    
  }; 
}

//DEPARTMENTS (reducers)

const claimsHistory = (oldListOfClaims, action ) => { 
 if (form.type === 'CREATE_CLAIM'){ 
    return[...oldListOfClaims, action.payload]; 
    
 }
  return oldListOfClaims; 
};

const accounting = (bagOfMoney, action) => { 
  if(form.type === 'CREATE_CLAIM') { 
   return bagOfMoney - action.payload.amountOfMoneyToCollect 
  }
}