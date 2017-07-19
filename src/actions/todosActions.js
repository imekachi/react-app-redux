// import { get } from 'axios'

// mockup data
import { Todo } from '../reducers/todosReducer'

export function fetchTodos() {
  return function (dispatch) {
    dispatch({
      type   : 'FETCH_TODOS_FULFILLED',
      payload: [
        new Todo('buy milk', true),
        new Todo('buy eggs'),
        new Todo('buy a chicken'),
        new Todo('buy a cow'),
      ],
    })
    // get('http://rest.learncode.academy/api/test123/todos')
    //   .then((response) => {
    //     dispatch({
    //       type   : 'FETCH_TODOS_FULFILLED',
    //       payload: response.data,
    //     })
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type   : 'FETCH_TODOS_REJECTED',
    //       payload: error,
    //     })
    //   })
  }
}

export function addTodo(text) {
  return {
    type   : 'ADD_TODO',
    payload: text,
  }
}

export function updateTodo(id, isComplete) {
  return {
    type   : 'UPDATE_TODO',
    payload: {
      id,
      isComplete,
    },
  }
}

export function filterTodo(keyword) {
  return {
    type   : 'FILTER_TODO',
    payload: keyword,
  }
}