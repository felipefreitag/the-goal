export const reset = () => ({ type: '@play/RESET' })

export const setGoal = goal => ({
  type: '@play/SET_GOAL',
  goal,
})

export const receive = item => ({
  type: '@play/RECEIVE',
  ...item,
})

export const deliver = item => ({
  type: '@play/DELIVER',
  ...item,
})

export const setResult = () => ({ type: '@play/SET_RESULT' })

export const nextRound = () => ({ type: '@play/NEXT_ROUND' })
