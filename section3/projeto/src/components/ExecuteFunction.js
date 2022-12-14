import React from 'react'

const ExecuteFunction = ({functionProp}) => {
  return (
    <div>
        <button onClick={functionProp}>Ativar função da prop</button>
    </div>
  )
}

export default ExecuteFunction