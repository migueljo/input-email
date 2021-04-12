import React from 'react'

function Close () {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <title>close</title>
      <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z" />
    </svg>
  )
}

function Icon ({ name }) {
  switch (name) {
    case 'remove':
    case 'close':
      return <Close />

    default:
      throw new Error(`icon "${name}" is not supported.`)
  }
}

export default Icon
