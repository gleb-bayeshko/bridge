import {
  LoginBox, LoginBrandButton, LoginError, LoginForm, LoginPasswordInput, LoginUserNameInput, LoginWrapper,
} from 'containers/Login/styled'
import BrandTitle from 'components/BrandTitle'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetUserErrors, signIn } from 'redux/slices/user'
import paths from 'paths'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    isLoading, isError, error, isAuth,
  } = useSelector(state => state.user)

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleUserNameChange = e => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    if (!userName || !password) return

    dispatch(signIn({
      userName,
      password,
    }))
  }

  useEffect(() => {
    if (isError) {
      dispatch(resetUserErrors())
    }
  }, [userName, password])

  useEffect(() => {
    if (isAuth) {
      navigate(paths.home, { replace: true })
    }
  }, [isAuth])

  return (
    <LoginWrapper>
      <LoginBox>
        <BrandTitle>
          Войдите в аккаунт
        </BrandTitle>
        <LoginForm onSubmit={handleFormSubmit}>
          <LoginUserNameInput
            onChange={handleUserNameChange}
            value={userName}
            disabled={isLoading}
          />
          <LoginPasswordInput
            onChange={handlePasswordChange}
            value={password}
            type="password"
            disabled={isLoading}
          />
          {isError && (
            <LoginError>
              {error}
            </LoginError>
          )}
          <LoginBrandButton
            type="submit"
            disabled={isLoading || !userName || !password}
          >
            Войти
          </LoginBrandButton>
        </LoginForm>
      </LoginBox>
    </LoginWrapper>
  )
}

export default Login
