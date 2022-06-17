import Card from 'components/Card'
import BrandButton from 'components/BrandButton'
import { CardContainer } from 'containers/Home/components/CardWithButton/styled'

const CardWithButton = ({
  isGameMode, onClick, reversed, src, disabled, btnText,
}) => {
  const handleClick = () => {
    if (isGameMode) {
      onClick?.()
    }
  }

  return (
    <CardContainer reversed={reversed}>
      <Card onClick={handleClick} src={src} disabled={!isGameMode} />
      {isGameMode && (
        <BrandButton onClick={handleClick} disabled={disabled}>
          {btnText}
        </BrandButton>
      )}
    </CardContainer>
  )
}

export default CardWithButton
