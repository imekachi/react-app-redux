import { get } from 'axios'

export function fetchTweets() {
  return function (dispatch) {
    get('http://rest.learncode.academy/api/test123/tweets')
      .then((response) => {
        dispatch({
          type   : 'FETCH_TWEETS_FULFILLED',
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type   : 'FETCH_TWEETS_REJECTED',
          payload: error,
        })
      })
  }
}

export function addTweet(id, text) {
  return {
    type   : 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type   : 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return {
    type   : 'DELETE_TWEET',
    payload: id,
  }
}