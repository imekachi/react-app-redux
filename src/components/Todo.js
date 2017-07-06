import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import * as TodoActions from '../actions/TodoActions'

const TodoItem = styled.li`
  padding: 5px 0;
  list-style: none;
  
  > label {
    margin-left: 5px;
  }
  
  &:hover > .fa {
    opacity: 1;
  }
`

const RemoveBtn = styled(FontAwesome)`
  opacity: 0;
  color: red;
  margin: 0 5px;
  cursor: pointer;
`

export default class Todo extends React.Component {

  constructor() {
    super()

    this.onRemoveClick = this.onRemoveClick.bind(this)
  }

  onRemoveClick() {
    TodoActions.deleteTodo(this.props.id)
  }

  onCompleteTodo() {
    // this.state.complete = true
  }

  render() {
    return (
      <TodoItem>
        <input type="checkbox" id={this.props.id} checked={this.props.complete} onChange={this.onCompleteTodo}/>
        <label htmlFor={this.props.id }>{this.props.text}</label>
        <RemoveBtn name="remove" onClick={this.onRemoveClick}/>
      </TodoItem>
    )
  }
}