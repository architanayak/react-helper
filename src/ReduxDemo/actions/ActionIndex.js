export const getUserDeatils = (user) => {
  return {
    type: 'GET_USER',
    payload: user
  }
}