import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor() {
    super()

    this.todos = [
      {
        id: 1,
        text: 'Go shopping',
        complete: false,
      },
      {
        id: 2,
        text: 'Pay bills test',
        complete: true,
      },
    ]
  }

  deleteTodo(id) {
    console.log(`removing: ${id} `)
    this.todos = this.todos.filter( todo => !(todo.id === id))
    this.emit('change')
  }

  createTodo(text) {
    const id = Date.now()
    this.todos.push({
      id,
      text,
      complete: false,
    })

    this.emit('change')
  }

  getAll() {
    return this.todos
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.text)
        break
      }

      case 'DELETE_TODO': {
        this.deleteTodo(action.id)
        break
      }

      default: {
        break
      }
    }
  }
}

const todoStore = new TodoStore()
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher

export default todoStore