const initialState = {
  articles: [],
  fullArticle: {}
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

    case "LOAD_FULL_ARTICLE":
      let fullArticle = action.content;
      console.log(action.content);
      return {
        ...state,
        fullArticle
      };

    default:
      return { ...state };
  }
};

export default reducer;
