export default (state = {formStatus: "inActive", buttonStatus: "Active"}, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return {...state, formStatus: "Active", buttonStatus: "inActive"}
    case "HIDE_FORM":
      return {...state, formStatus: "inActive", buttonStatus: "Active"}
    default:
      return state
  }
}
