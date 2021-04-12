import React from 'react'
import { Global, css } from '@emotion/react'

const styles = css`
*, *:before, *:after {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Helvetica, sans-serif;
}
textarea {
  font-family: Helvetica, sans-serif;
}
`

function GlobalStyles () {
  return <Global styles={styles} />
}

export default GlobalStyles
