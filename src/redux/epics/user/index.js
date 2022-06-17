import { ofType } from 'redux-observable'
import { delay, map } from 'rxjs/operators'
import { signIn, signInComplete, signInFailed } from 'redux/slices/user'
import { user } from 'mock/user'

export const userAuthEpic = action$ => {
  return action$.pipe(
    ofType(signIn.type),
    delay(500), // request imitation
    map(({ payload }) => {
      const { userName, password } = payload

      if (userName === user.userName && password === user.password) {
        return signInComplete(payload)
      }

      return signInFailed({ error: 'Имя пользователя или пароль введены не верно' })
    }),
  )
}
