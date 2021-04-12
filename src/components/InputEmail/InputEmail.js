import React from 'react'
import PropTypes from 'prop-types'
import validator from 'email-validator'

import EmailsSelected from './EmailsSelected/EmailsSelected'
import EmailList from './EmailList'

import * as S from './InputEmailStyles'

function EmailInput ({ onSelectedEmails, emailList, onChange, value: controlledValue }) {
  const inputEmailRef = React.useRef()
  const [selectedEmails, setSelectedEmails] = React.useState([])
  const [uncontrolledValue, setUncontrolledValue] = React.useState('')

  const focusInputEmail = () => inputEmailRef.current.focus()
  const isValueControlled = controlledValue != null
  const value = isValueControlled ? controlledValue : uncontrolledValue

  const handleSelectedEmail = (e, email) => {
    const newEmail = {
      value: email,
      valid: validator.validate(email),
      id: Math.random().toString(36).substring(7)
    }
    const emailAlreadyIn = selectedEmails.find(email => email.value === newEmail.value)

    if (emailAlreadyIn) {
      window.alert(`${email} is already added.`)
      focusInputEmail()
      return
    }

    const newSelectedEmails = [...selectedEmails, newEmail]
    setSelectedEmails(newSelectedEmails)

    focusInputEmail()

    handleChange('')
    onSelectedEmails && onSelectedEmails(newSelectedEmails)
  }

  const handleRemoveEmail = (e, emailToRemove) => {
    const newSelectedEmails = selectedEmails.filter(selectedEmail => selectedEmail.id !== emailToRemove.id)
    setSelectedEmails(newSelectedEmails)

    focusInputEmail()
    onSelectedEmails && onSelectedEmails(newSelectedEmails)
  }

  const handleKeyPress = (e) => {
    const value = e.target.value

    if (e.code === 'Enter' && value.length > 0) {
      handleSelectedEmail(e, value)
    }
  }

  const handleChange = (email) => {
    if (!isValueControlled) setUncontrolledValue(email)

    onChange && onChange(email)
  }

  return (
    <S.Container>
      <EmailsSelected emails={selectedEmails} onRemove={handleRemoveEmail} />
      <S.InputEmailCtn>
        <S.InputEmail
          type="text"
          placeholder="Enter recipients..."
          onChange={e => handleChange(e.target.value)}
          onKeyPress={handleKeyPress}
          value={value}
          ref={inputEmailRef}
        />
        {
          emailList && (
            <EmailList
              list={emailList}
              onSelect={handleSelectedEmail}
            />
          )
        }
      </S.InputEmailCtn>
    </S.Container>
  )
}

EmailInput.propTypes = {
  onSelectedEmails: PropTypes.func.isRequired,
  emailList: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default EmailInput
