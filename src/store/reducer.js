const initialState = {
  articles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      let articles = [];

      for (let id in action.data) {
        articles.push({ id, ...action.data[id] });
      }

      return {
        ...state,
        articles
      };

    default:
      return { ...state };
  }
};

export default reducer;
