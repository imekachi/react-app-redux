import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import DemoHeader from './components/DemoHeader'
import TodoSearchInput from './components/TodoSearchInput'
import TodoAddInput from './components/TodoAddInput'
import TodoList from './components/TodoList'

import { fetchUser } from './actions/userActions'

const Outer = styled.div`
  text-align: center;
`

const Header = styled.h1`

`

const TodoWrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
`

const theme = {
  // bg: 'papayawhip',
  // fg: 'tomato'
}

@connect((store)=>{
  return {
    user: store.user.user
  }
})
export default class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    return (
      <Outer>
        <ThemeProvider theme={theme}>
          <DemoHeader/>
        </ThemeProvider>
        <Header>{ this.props.user.name }</Header>
        <TodoWrapper>
          <TodoSearchInput placeholder="Search todo..." type="text"/>
          <TodoList/>
          <TodoAddInput placeholder="Add new todo..." type="text"/>
        </TodoWrapper>
      </Outer>
    )
  }
}