export default (state = {user: {name: null, username: null, profilePicture: null, location: null}} , action) => {
  switch (action.type) {
    case "SET_USER":
      return {user: {
        name: action.name,
        username: action.username,
        profilePicture: action.profilePicture,
        location: action.location
      }}
    default:
      return state
  }
}
