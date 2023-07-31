const initialState = {
    token:""
  };


  const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case "logged":
            return {...state,token:payload}
        case "out":
            return {...state,token:""}
        default:
            return state
    }
  }

  export {reducer};