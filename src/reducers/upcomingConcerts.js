export default (state = [] , action) => {
  switch (action.type) {
    case "SET_UPCOMING_CONCERTS":
      return action.concerts
    default:
      return state
  }
}
