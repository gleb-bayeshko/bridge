import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import paths from 'paths'
import { useDispatch } from 'react-redux'
import { signOut } from 'redux/slices/user'

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = localStorage.getItem('auth')

    if (!auth && location.pathname !== paths.login) {
      navigate(paths.login, { replace: true })
      dispatch(signOut())

      return
    }

    if (auth && location.pathname === paths.login) {
      navigate(paths.home, { replace: true })
    }
  }, [location])

  return (
    <>
      {children}
    </>
  )
}
