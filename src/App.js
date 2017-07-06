import React, { Component } from 'react'

import styled, { ThemeProvider } from 'styled-components'
import DemoHeader from './components/DemoHeader'
import TodoInput from './components/TodoInput'
import Todo from './components/Todo'
import TodoStore from './stores/TodoStore'

const Outer = styled.div`
  text-align: center;
`

const TodoWrapper = styled.div`
  max-width: 480px;
  margin: 20px auto;
`
const TodoList = styled.ul`
  text-align: left;
  padding: 0;
`

const theme = {
  // bg: 'papayawhip',
  // fg: 'tomato'
}

class App extends Component {
  constructor() {
    super()

    this.getTodos = this.getTodos.bind(this)
    this.state = {
      todos: TodoStore.getAll(),
    }
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    })
  }

  // Only happen once when this component is about to be rendered
  componentWillMount() {
    // add event listeners
    TodoStore.on('change', this.getTodos)
    console.log(`count listener: ${TodoStore.listenerCount('change')}`)
  }

  componentWillUnmount() {
    // remove event listener to prevent memory leaks
    TodoStore.removeListener('change', this.getTodos)
  }

  render() {
    const { todos } = this.state

    const TodoComponents = todos.map((todo) => {
      return <Todo key={ todo.id } { ...todo } />
    })

    return (
      <Outer>
        <ThemeProvider theme={theme}>
          <DemoHeader/>
        </ThemeProvider>
        <TodoWrapper>
          <TodoList>
            {TodoComponents}
          </TodoList>
          <TodoInput/>
        </TodoWrapper>
      </Outer>
    )
  }
}

export default App
