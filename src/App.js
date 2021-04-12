import React from 'react'
import styled from '@emotion/styled'

import InputEmail from 'src/components/InputEmail'

import allEmails from 'src/emails.json'

import GlobalStyles from './GlobalStyles'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
`

const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
`

function App () {
  const [currentEmail, setCurrentEmail] = React.useState('')
  const [emailList, setEmailList] = React.useState([])

  const handleEmailChange = (email) => {
    setCurrentEmail(email)
  }

  React.useEffect(() => {
    setEmailList(filterEmails(allEmails.emails, currentEmail))
  }, [currentEmail])

  return (
    <Container>
      <GlobalStyles />
      <InputContainer>
        <InputEmail
          onSelectedEmails={emails => console.log({ emails })}
          onChange={handleEmailChange}
          emailList={emailList}
          value={currentEmail}
        />
      </InputContainer>
    </Container>
  )
}

function filterEmails (emails, currentEmail) {
  if (currentEmail.length < 3) return []
  return emails.filter(email => email.includes(currentEmail))
}

export default App
