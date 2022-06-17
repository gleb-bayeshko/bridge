import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 14px;
  background: #5c3ffd;
  color: white;
  border-radius: 4px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: background 300ms;

  &:hover {
    background: #3f1eee;
  }

  &:disabled {
    background: #bbafff;
    cursor: not-allowed;
  }
`
