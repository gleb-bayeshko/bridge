import {
  Header, HeaderContent, HeaderSignOutButton, HeaderTitle, UserLayoutContainer,
} from 'layouts/UserLayout/styled'
import Wrapper from 'components/Wrapper'
import { useDispatch } from 'react-redux'
import { signOut } from 'redux/slices/user'
import { useNavigate } from 'react-router-dom'
import paths from 'paths'
import { resetCards } from 'redux/slices/cards'

const UserLayout = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOutClick = () => {
    dispatch(signOut())
    dispatch(resetCards())
    navigate(paths.home, { replace: true })
  }

  return (
    <UserLayoutContainer>
      <Header>
        <Wrapper>
          <HeaderContent>
            <HeaderTitle>
              Bridge
            </HeaderTitle>
            <HeaderSignOutButton onClick={handleSignOutClick}>
              Выйти
            </HeaderSignOutButton>
          </HeaderContent>
        </Wrapper>
      </Header>
      {children}
    </UserLayoutContainer>
  )
}

export default UserLayout
