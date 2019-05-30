const initialState = {
  articles: [],
  fullArticle: {},
  galleries: []
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

    case "CLEAN_ARTICLE":
      fullArticle = action.clear;

      return {
        ...state,
        fullArticle
      };

    case "LOAD_GALLERIES":
      let galleries = [];

      for (let id in action.data) {
        galleries.push({ id, ...action.data[id] });
      }

      return {
        ...state,
        galleries
      };

    default:
      return { ...state };
  }
};

export default reducer;
