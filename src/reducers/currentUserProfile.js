export default (state = {formStatus: "inActive", buttonStatus: "Active"}, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return {formStatus: "Active", buttonStatus: "inActive"}
    default:
      return state
  }
}
