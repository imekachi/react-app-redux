import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// UI
import Todo from './Todo'

// DATA
import { fetchTodos, updateTodo } from '../actions/todosActions'

const Wrapper = styled.div`
  text-align: left;
`

const List = styled.ul`
  padding: 0;
`

const Item = styled(Todo)`

`

// /* Using decorator syntax */
// Need to goto node_modules/babel-preset-react-app/index.js
// add require.resolve('babel-plugin-transform-decorators-legacy')
@connect((store) => {
  return {
    todos        : store.todos.todos,
    searchKeyword: store.todos.searchKeyword,
  }
})
export default class TodoList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTodos())
  }

  updateTodo(id, isComplete) {
    this.props.dispatch(updateTodo(id, isComplete))
  }

  getFilteredTodos() {
    if ( this.props.searchKeyword === '' ) return this.props.todos

    const filterMatch = new RegExp(this.props.searchKeyword, 'i') // match with case insensitive
    return this.props.todos.filter(todo => {
      return filterMatch.test(todo.text)
    })
  }

  render() {
    const listOfTodos = this.getFilteredTodos().map( todo => {
      return <Item key={todo.id} {...todo} updateTodo={this.updateTodo.bind(this)}/>
    })

    return (
      <Wrapper>
        <List>
          {listOfTodos}
        </List>
      </Wrapper>
    )
  }
}