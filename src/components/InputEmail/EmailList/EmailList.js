import React from 'react'
import PropTypes from 'prop-types'

import * as S from './EmailListStyles'

function EmailList ({ list, onSelect, show = true }) {
  return (
    <S.Container show={show}>
      {list.map(email => (
        <S.Button
          key={email}
          onClick={(e) => onSelect(e, email)}
        >
          {email}
        </S.Button>
      ))}
    </S.Container>
  )
}

EmailList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
  show: PropTypes.bool
}

export default EmailList
