import React from 'react'
import { useLocation } from 'react-router-dom'

function Welcome(props) {
    const location = useLocation();
    const username = location.state.username;
  return (
    <div>Welcome:{username}</div>
  )
}

export default Welcome