import styled from '@emotion/styled'

export const Remove = styled.button`
  border: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background-color 300ms;
  opacity: 0;
  background-color: transparent;
  
  &:hover {
    background-color: gray;
    
    svg {
      fill: white;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

export const RemoveWithWarning = styled.button`
  border: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background-color 300ms;
  opacity: 1;
  background-color: #F1515F;
  color: white;
  
  &:hover .warning {
    display: none;
  }
  &:hover .remove {
    display: inline-block;
  }

  .remove {
    display: none
  }

  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`

export const Container = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 6px;
  background-color: ${props => props.valid ? 'transparent' : '#F3B7BD'};
  margin-right: 5px;

  &:hover {
    background-color: ${props => props.valid ? '#EDEDED' : '#F3B7BD'};

    ${Remove} {
      opacity: 1;
    }
  }
`

export const Email = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-right: 8px;
`
