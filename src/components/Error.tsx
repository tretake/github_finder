import React from 'react'

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div>
        <p>{message}</p>
    </div>
  )
}

export default Error
