export default (state = {formStatus: "inActive", buttonStatus: "Active"}, action) => {
  console.log(action)
  switch (action.type) {
    case "SHOW_FORM":
      console.log("hit switch statement")
      return {formStatus: "Active", buttonStatus: "inActive"}
    default:
      return state
  }
}
