export const fetchRescueAnimals = () => {
  fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => console.log(res))
}