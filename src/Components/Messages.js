import React from 'react'

function Message({errorStatus}) {
  return (
    <div>
        <p>{errorStatus}</p>
    </div>
  )
}

export default Message