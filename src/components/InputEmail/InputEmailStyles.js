import styled from '@emotion/styled'

export const Container = styled.div`
  border-radius: 8px;
  position: relative;
  width: 100%;
  min-height: 50px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #FDFDFD;
  box-shadow: 0px 16px 34px rgba(48, 53, 57, 0.05);
`

export const InputEmailCtn = styled.div`
  position: relative;
  display: flex;
  padding: 5px 0;
  flex: 1;
`

export const InputEmail = styled.input`
  border: 0;
  resize: none;
  outline: transparent;
  background-color: transparent;
  font-size: 16px;
  line-height: 20px;
  color: #1A1818;
  width: 100%;
  min-width: 130px;
`
