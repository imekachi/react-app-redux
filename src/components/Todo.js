import React from 'react'
import styled from 'styled-components'

const TodoWrapper     = styled.li`
  display: table;
  width: 100%;
  cursor: pointer;

  &:nth-child(even) {
    background-color: rgba(0,0,0,.03)
  }
`
const CheckboxWrapper = styled.span`
  display: table-cell;
  vertical-align: middle;
  width: 1%;
  padding: 0 10px;
`
const Label           = styled.label`
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
  cursor: inherit;
`

export default class Todo extends React.Component {

  handleOnClick(event) {
      this.props.updateTodo(this.props.id, event.target.checked)
  }

  render() {
    return (
      <TodoWrapper isComplete={this.props.isComplete}>
        <CheckboxWrapper>
          <input type="checkbox"
                 id={this.props.id}
                 checked={this.props.isComplete}
                 onChange={this.handleOnClick.bind(this)}
          />
        </CheckboxWrapper>
        <Label htmlFor={this.props.id}>{this.props.text}</Label>
      </TodoWrapper>
    )
  }
}