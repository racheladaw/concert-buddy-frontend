export default (state = {formStatus: "inActive", buttonStatus: "Active", profilePicture: null}, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return {...state, formStatus: "Active", buttonStatus: "inActive"}
    case "HIDE_FORM":
      return {...state, formStatus: "inActive", buttonStatus: "Active"}
    case "SET_PROFILE_PICTURE":
      return {...state, profilePicture: action.picture}
    default:
      return state
  }
}
