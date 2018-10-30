export const reset = () => ({ type: '@play/RESET' })

export const receive = item => ({
  type: '@play/RECEIVE',
  ...item,
})

export const deliver = item => ({
  type: '@play/DELIVER',
  ...item,
})
