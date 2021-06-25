
export const DetailsReducer = (state, { type, payload }) => {

    switch ( type ) {
        case 'ADD_DETAILS':
            return {
                ...state,
                cant: payload.cant,
                nombre: payload.nombre,
                precio: payload.precio
            };

        default:
            return state;
    }

};
