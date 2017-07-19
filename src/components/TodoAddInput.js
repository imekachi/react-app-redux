import TodoInput from './TodoInput'
import { connect } from 'react-redux'

import { addTodo } from '../actions/todosActions'

@connect()
export default class TodoAddInput extends TodoInput {

  onKeyPress(event) {
    // Add only when the enter key is pressed
    if (event.which === 13) {
      this.props.dispatch(addTodo(event.target.value))
      event.target.value = ''
    }
  }
}