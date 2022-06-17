import BrandButton from 'components/BrandButton'
import { CentralButtonContainer } from 'containers/Home/components/CentralButton/styled'

const CentralButton = ({ isGameMode, onClick, btnText }) => {
  return (
    <CentralButtonContainer>
      {!isGameMode && (
        <BrandButton onClick={onClick}>
          {btnText}
        </BrandButton>
      )}
    </CentralButtonContainer>
  )
}

export default CentralButton
