import styled from 'styled-components'
import BrandInput from 'components/BrandInput'
import BrandButton from 'components/BrandButton'

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 30vh 10px 0;
  background: #c9c9c9;
`

export const LoginBox = styled.div`
  width: 100%;
  max-width: 620px;
  height: fit-content;
  background: #f6f7ff;
  padding: 30px;
  border-radius: 5px;
`

export const LoginForm = styled.form`
  margin: 20px 0 0;
`

export const LoginUserNameInput = styled(BrandInput)`
  padding: 12px 10px;
`

export const LoginPasswordInput = styled(BrandInput)`
  padding: 12px 10px;
  margin-top: 20px;
`

export const LoginBrandButton = styled(BrandButton)`
  width: 100%; 
  margin-top: 30px;
`

export const LoginError = styled.div`
  text-align: center;
  color: red;
  margin-top: 10px;
  font-weight: 600;
`
