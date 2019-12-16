export default (state = [] , action) => {
  switch (action.type) {
    case "ADD_SAVED_CONCERT":
      return [
        ...state,
        action.concert
      ]
      case "SET_SAVED_CONCERTS":
        return action.concerts
    default:
      return state
  }
}
