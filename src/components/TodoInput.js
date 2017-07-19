import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px 0;
`

const Input = styled.input`
  padding: 8px;
  border-radius: 3px;
  box-shaddow: 0 none;
  border: 1px solid rgba(0,0,0,0.3);
  width: 100%;
`

export default class TodoInput extends React.Component {

  // Interfaces
  onChange() {}
  onKeyPress() {}

  render() {
    return (
      <Wrapper>
        <Input onChange={this.onChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} {...this.props}/>
      </Wrapper>
    )
  }
}