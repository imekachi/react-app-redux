import React from 'react'
import styled from 'styled-components'
import * as TodoActions from '../actions/TodoActions'

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid rgba( 0,0,0,0.3 );
  box-shadow: none;
  height: 40px;
  width: 100%;
  padding: 8px 8px
`

export default class TodoInput extends React.Component {
  constructor() {
    super()

    this.onType = this.onType.bind(this)
  }

  createTodo(text) {
    TodoActions.createTodo(text)
  }

  onType(event) {
    if(event.key === 'Enter') {
      this.createTodo(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    return (
      <Input type="text" onKeyPress={this.onType} placeholder="Add todo here..."/>
    )
  }
}