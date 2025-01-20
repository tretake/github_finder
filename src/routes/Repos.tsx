import React from 'react'
import { useParams } from 'react-router-dom'

const Repos = () => {

    const {username} = useParams();
  return (
    <div>
      <h1>oi eu sou o respos do {username}</h1>
    </div>
  )
}

export default Repos
