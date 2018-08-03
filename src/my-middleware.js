const protectedNames = [
  'kenji',
  'danjun',
  'murakami',
  'drico',
  'toi',
  'gi',
  'cto',
]

const MyMiddleware = store => next => action => {
  if (action.type === 'ADD_TODO') {
    const protectedNamesText = protectedNames.some(protectedName => {
      return action.text.toLowerCase().includes(protectedName)
    })
    if (protectedNamesText) {
      alert(`Don't use your friends name on tasks! 😡`)
      return
    }
  }
  return next(action)
}

export default MyMiddleware
