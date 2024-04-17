export const initialState = {
    date: false,
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_DATE':
        return { ...state, date: !state.date };
      default:
        return state;
    }
  };
  