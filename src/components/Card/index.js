import { CardContainer, CardImage } from 'components/Card/styled'

const Card = ({ src, onClick, disabled }) => {
  const handleCardClick = () => {
    onClick?.()
  }

  return (
    <CardContainer onClick={handleCardClick} disabled={disabled}>
      <CardImage src={src} />
    </CardContainer>
  )
}

export default Card
