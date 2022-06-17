import styled from 'styled-components'

export const UserLayoutContainer = styled.div`
  min-height: 100vh;
`

export const Header = styled.div`
  width: 100%;
  background: #323941;
  padding: 10px 0;
  display: flex;
  align-items: center;
  height: 60px;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 6px 10px;
  background: #505a62;
  color: white;
`

export const HeaderSignOutButton = styled.button`
  color: white;
  font-size: 16px;
  
  &:hover {
    text-decoration: underline;
  }
`
