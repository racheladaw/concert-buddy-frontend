import { baseUrl } from '../config/baseUrl';

export const setFormStateToActive = () => {
  return {
    type: "SHOW_FORM"
  }
}

export const setFormStateToInactive = () => {
  return {
    type: "HIDE_FORM"
  }
}
