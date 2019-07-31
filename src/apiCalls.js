export const fetchRescueAnimals = () => {
  return fetch('http://localhost:3001/api/v1/rescue-animals')
    .then(res => {
      if(!res.ok) {
        return  ('Error fethcing rescue animals');
      } else {
        return res.json()
      }
    })
}

export const fetchDonations = () => {
  return fetch('http://localhost:3001/api/v1/donations')
    .then(res => {
      if(!res.ok) {
        return  ('Error fethcing donation');
      } else {
        return res.json()
      }
    })
}

export const fetchAddDonation = newDonation => {
  return fetch('http://localhost:3001/api/v1/donations',{
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify(newDonation)
  })
    .then(res => {
      if(!res.ok) {
        return  ('Error fethcing donation');
      } else {
        return res.json()
      }
    })
}