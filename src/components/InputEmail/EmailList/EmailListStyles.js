import styled from '@emotion/styled'

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 294px;
  background-color: white;
  border-radius: 4px;
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'all' : 'none'};
  z-index: 1;
  max-height: 260px;
  overflow: auto;
`

export const Button = styled.button`
  outline: transparent;
  width: 100%;
  height: 40px;
  border: 0;
  background-color: transparent;
  transition: background-color 300ms;
  font-size: 14px;
  text-align: left;
  padding: 0 21px;

  &:hover {
    background-color: #EFF5F9;
  }
  &:focus {
    background-color: #EFF5F9;
  }

  &:first-of-type {
    border-radius: 4px 4px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`
