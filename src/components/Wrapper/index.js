import { WrapperContainer } from 'components/Wrapper/styled'

const Wrapper = ({ children }) => {
  return (
    <WrapperContainer>
      {children}
    </WrapperContainer>
  )
}

export default Wrapper
