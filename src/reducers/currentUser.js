export default (state = null , action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "REMOVE_CURRENT_USER":
      return null
    case "SET_PROFILE_PICTURE":
      return {
        ...state,
        attributes: {
          ...state.attributes,
          profile_picture: {
            image_url: action.picture
          }
        }
      }
    default:
      return state
  }
}
