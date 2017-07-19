import TodoInput from './TodoInput'
import { connect } from 'react-redux'

import { filterTodo } from '../actions/todosActions'

@connect()
export default class TodoSearchInput extends TodoInput {

  onChange(event) {
    this.props.dispatch(filterTodo(event.target.value))
  }
}