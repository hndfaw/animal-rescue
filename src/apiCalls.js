export const fetchRescueAnimals = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => {
      if(!res.ok) {
        throw Error ('Error fethcing rescue animals...');
      } else {
        return res.json()
      }
    })
}