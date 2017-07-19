// TODOS REDUCER

export class Todo {
  constructor(text, isComplete = false) {
    this.id         = Date.now() + Math.round(Math.random() * 100)
    this.text       = text
    this.isComplete = isComplete

    this.update = this.update.bind(this)
  }

  update(isComplete) {
    return this.isComplete = isComplete
  }
}

const storeTemplate = {
  todos        : [],
  searchKeyword: '',
  fetching     : false,
  fetched      : false,
  error        : null,
}

export default function reducer(state = storeTemplate, action) {
  switch (action.type) {

    case 'FETCH_TODOS': {
      // this is equivalent to Object.assign({}, state, {fetching: true})
      // you don't mutate the state object
      return { ...state, fetching: true }
    }

    case 'FETCH_TODOS_REJECTED': {
      return { ...state, fetching: false, error: action.payload }
    }

    case 'FETCH_TODOS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched : true,
        todos   : action.payload,
      }
    }

    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, new Todo(action.payload)],
      }
    }

    case 'UPDATE_TODO': {
      const { id, isComplete } = action.payload,
            newTodos           = [...state.todos],
            indexToUpdate      = newTodos.findIndex(todo => todo.id === id)

      newTodos[indexToUpdate].update(isComplete)

      return {
        ...state,
        todos: newTodos,
      }
    }

    case 'FILTER_TODO': {
      return {
        ...state,
        searchKeyword: action.payload,
      }
    }

    default: {
      return state
    }
  }
}