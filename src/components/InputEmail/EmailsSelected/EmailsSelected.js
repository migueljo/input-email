import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'src/components/Icon'

import * as S from './EmailsSelectedStyles'

function RemoveIcon ({ valid, onClick }) {
  if (valid) {
    return (
      <S.Remove onClick={onClick}>
        <Icon name="remove" />
      </S.Remove>
    )
  }

  return (
    <S.RemoveWithWarning onClick={onClick}>
      <span className="warning">!</span>
      <span className="remove">
        <Icon name="remove" />
      </span>
    </S.RemoveWithWarning>
  )
}
RemoveIcon.propTypes = {
  valid: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

function EmailSelected ({ email, onRemove }) {
  const handleRemove = (e) => {
    onRemove && onRemove(e, email)
  }

  return (
    <S.Container valid={email.valid}>
      <S.Email>{email.value}</S.Email>
      <RemoveIcon valid={email.valid} onClick={handleRemove} />
    </S.Container>
  )
}
EmailSelected.propTypes = {
  email: PropTypes.shape({ value: PropTypes.string, valid: PropTypes.bool }),
  onRemove: PropTypes.func.isRequired
}

function EmailsSelected ({ emails, onRemove }) {
  return emails.map(email => (
    <EmailSelected email={email} key={email.id} onRemove={onRemove} />
  ))
}

export default EmailsSelected
