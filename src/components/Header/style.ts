import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewTransactionButton = styled.button`
  height: 50px;
  border: none;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
