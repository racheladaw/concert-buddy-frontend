export default (state = null , action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "REMOVE_CURRENT_USER":
      return null
    default:
      return state
  }
}
