import { Button } from 'components/BrandButton/styled'

const BrandButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}

export default BrandButton
