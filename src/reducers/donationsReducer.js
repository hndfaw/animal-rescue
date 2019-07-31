export const donationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_DONATION_DATA':
      return action.data
    default:
      return state;
  }
}