import {
  BalanceBar,
  CardsContainer, CardsError,
  HomeContainer,
  HomeContent,
  HomeSubtitle,
} from 'containers/Home/styled'
import Wrapper from 'components/Wrapper'
import BrandTitle from 'components/BrandTitle'
import { useEffect, useState } from 'react'
import {
  BET_COEFFICIENT, BET_VALUE, CARDS_VALUES, LEFT_CARD_ID, RIGHT_CARD_ID,
} from 'containers/Home/const'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards, resetCards } from 'redux/slices/cards'
import CardWithButton from 'containers/Home/components/CardWithButton'
import CentralButton from 'containers/Home/components/CentralButton'

const Home = () => {
  const nf = new Intl.NumberFormat('en-US')
  const dispatch = useDispatch()

  const {
    leftCard, rightCard, isLoading, isError, error,
  } = useSelector(state => state.cards)

  const [isGameMode, setIsGameMode] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [selectedCard, setSelectedCard] = useState('')
  const [balance, setBalance] = useState(75000)
  const [topText, setTopText] = useState('Кто выиграет?')

  const decreaseBalance = () => {
    setBalance(prev => prev - BET_VALUE)
  }

  const increaseBalanceAfterWin = () => {
    setBalance(prev => prev + BET_VALUE * BET_COEFFICIENT)
  }

  const increaseBalanceAfterDraw = () => {
    setBalance(prev => prev + BET_VALUE)
  }

  const calculateResult = () => {
    const leftCardValue = CARDS_VALUES[leftCard.value]
    const rightCardValue = CARDS_VALUES[rightCard.value]
    const userSelectedValue = selectedCard

    setSelectedCard('')

    if (leftCardValue === rightCardValue) {
      increaseBalanceAfterDraw()

      return setTopText('Ничья')
    }

    const isLeftValueGreater = leftCardValue > rightCardValue
    const isUserSelectLeftValue = userSelectedValue === LEFT_CARD_ID

    if ((isLeftValueGreater && isUserSelectLeftValue) || (!isLeftValueGreater && !isUserSelectLeftValue)) {
      increaseBalanceAfterWin()

      return setTopText(`Вы выиграли ${BET_VALUE}$`)
    }

    setTopText('Вы проиграли:(')
  }

  const handleStartGameClick = () => {
    setIsGameMode(true)
    dispatch(resetCards())
    setIsGameStarted(true)
    decreaseBalance()
    setTopText('Кто выиграет?')
  }

  const handleLeftCardClick = () => {
    setSelectedCard(LEFT_CARD_ID)
  }
  const handleRightCardClick = () => {
    setSelectedCard(RIGHT_CARD_ID)
  }

  useEffect(() => {
    if (selectedCard) {
      dispatch(fetchCards())
    }
  }, [selectedCard])

  useEffect(() => {
    if (leftCard && rightCard) {
      setIsGameMode(false)
      calculateResult()
    }
  }, [leftCard, rightCard])

  return (
    <HomeContainer>
      <BalanceBar>
        <Wrapper>
          {`Баланс: ${nf.format(balance)}`}
        </Wrapper>
      </BalanceBar>
      <HomeContent>
        <Wrapper>
          <BrandTitle>
            {topText}
          </BrandTitle>
          <HomeSubtitle visible={isGameMode}>
            Сыграй в игру и испытай удачу
          </HomeSubtitle>
          {isError && (
            <CardsError>
              {error}
            </CardsError>
          )}
          <CardsContainer>
            <CardWithButton
              onClick={handleLeftCardClick}
              isGameMode={isGameMode}
              disabled={isLoading}
              src={leftCard?.img}
              btnText="Слева"
            />
            <CentralButton
              onClick={handleStartGameClick}
              isGameMode={isGameMode}
              btnText={isGameStarted ? 'Сыграть еще' : 'Играть'}
            />
            <CardWithButton
              onClick={handleRightCardClick}
              isGameMode={isGameMode}
              disabled={isLoading}
              src={rightCard?.img}
              btnText="Справа"
              reversed
            />
          </CardsContainer>
        </Wrapper>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
