const initialState = {
  articles: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {};

    default:
      return { ...state };
  }
};

export default reducer;
