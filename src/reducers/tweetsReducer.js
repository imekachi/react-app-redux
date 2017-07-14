export default function reducer(state = {
  tweets  : [],
  fetching: false,
  fetched : false,
  error   : null,
}, action) {
  switch (action.type) {
    case 'FETCH_TWEETS': {
      // this is equivalent to Object.assign({}, state, {fetching: true})
      // you don't mutate the state object
      return { ...state, fetching: true }
    }
    case 'FETCH_TWEETS_REJECTED': {
      return { ...state, fetching: false, error: action.payload }
    }
    case 'FETCH_TWEETS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched : true,
        tweets  : action.payload,
      }
    }
    case 'ADD_TWEET': {
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      }
    }
    case 'UPDATE_TWEET': {
      const { id }        = action.payload,
            newTweets     = [...state.tweets],
            tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)

      newTweets[tweetToUpdate] = action.payload

      return {
        ...state,
        tweets: newTweets,
      }
    }
    case 'DELETE_TWEET': {
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
      }
    }
    default: {
      return state
    }
  }
}