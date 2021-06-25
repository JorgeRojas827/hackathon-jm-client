export const DetailsReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_DETAILS": 
        return {
          details: [...state.details, payload]
        };
    // case "ADD_DETAILS_CANT": 
    //     return {
    //       details: [...state.details, payload.cant ++]
    //     };
    default: 
        return state;
  }
};
