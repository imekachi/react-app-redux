import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled, { ThemeProvider } from 'styled-components'
import DemoHeader from './components/DemoHeader'

import { fetchUser } from './actions/userActions'
import { fetchTweets } from './actions/tweetsActions'

const Outer = styled.div`
  text-align: center;
`

const TodoWrapper = styled.div`
  max-width: 480px;
  margin: 20px auto;
`

const TweetsWrapper = styled.div`
  text-align: left;
`

const theme = {
  // bg: 'papayawhip',
  // fg: 'tomato'
}
// /* Using decorator syntax */
// @connect((store) => {
//   return {
//     user       : store.user.user,
//     userFetched: store.user.fetched,
//     tweets     : store.tweets.tweets,
//   }
// })
class App extends Component {

  constructor() {
    super()
    this.fetchTweets = this.fetchTweets.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.props.dispatch(fetchTweets())
  }

  fetchTweets() {
    console.log('load tweet clicked')
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props

    const Tweets = (() => {
      if (tweets.length) {
        return tweets.map((tweet) => {
          return <li key={tweet.id}>{tweet.text}</li>
        })
      } else {
        return <button onClick={this.fetchTweets}>loadtweet</button>
      }
    })()

    return (
      <Outer>
        <ThemeProvider theme={theme}>
          <DemoHeader/>
        </ThemeProvider>
        <TodoWrapper>
          <h1>{user.name}</h1>
          <TweetsWrapper>
            { Tweets }
          </TweetsWrapper>
        </TodoWrapper>
      </Outer>
    )
  }
}

export default connect((store) => {
  return {
    user       : store.user.user,
    userFetched: store.user.fetched,
    tweets     : store.tweets.tweets,
  }
})(App)
