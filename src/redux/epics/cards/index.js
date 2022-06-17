import { ofType } from 'redux-observable'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { fetchCards, fetchCardsComplete, fetchCardsFailed } from 'redux/slices/cards'
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs'

export const cardsFetchEpic = action$ => {
  return action$.pipe(
    ofType(fetchCards.type),
    mergeMap(() => ajax.getJSON('https://deckofcardsapi.com/api/deck/new/draw/?count=2').pipe(
      map(({ cards }) => {
        const leftCard = {
          img: cards[0].image,
          value: cards[0].value,
        }

        const rightCard = {
          img: cards[1].image,
          value: cards[1].value,
        }

        return fetchCardsComplete({ leftCard, rightCard })
      }),
      catchError(() => of(fetchCardsFailed({ error: 'Произошла ошибка' }))),
    )),
  )
}
