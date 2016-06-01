import actionTypes from '../constants/action_types'

export function sayHello() {
  return {
    type: actionTypes.SAY_HELLO,
    value: "Hello"
  }
}

export function sayBye() {
  return {
    type: actionTypes.SAY_BYE,
    value: "Bye"
  }
}
