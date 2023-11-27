import React from 'react'

function Api() {
  return (
    fetch('https://6530d94e6c756603295f269f.mockapi.io/jobs')
  
   .then((res)=>{
    res.json()
    .then((res)=>{
    console.log(res);
   setJobs(res)
  })
})

  )
}

export default Api