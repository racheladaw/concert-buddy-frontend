export default (state = [] , action) => {
  switch (action.type) {
    case "ADD_SAVED_CONCERT":
      return [
        ...state,
        {concert_id: action.concert_id}
      ]
    default:
      return state
  }
}
