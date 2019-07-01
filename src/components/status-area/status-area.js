import React from 'react'

export default function StatusArea(props) {
  return (
    <>
      Step count: { props.stepCount }<br />
      Current position: { props.position }<br />
    </>
  )
}

