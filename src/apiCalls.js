export const fetchRescueAnimals = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animal')
    .then(res => {
      if(!res.ok) {
        return  ('Error fethcing rescue animals');
      } else {
        return res.json()
      }
    })
}