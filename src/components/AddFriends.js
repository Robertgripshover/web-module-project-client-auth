import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


const AddFriend = () => {

  const {push} = useHistory()

  const [formData, setFormData] = useState({
    name: '',
    age: '', 
    email: ''
  })

 
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })        
}

const submitFriendForm = (e) => {
  e.preventDefault()
  console.log('Clicked :)')
  axios.post(`http://localhost:9000/api/friends`, formData)
      .then(resp => {
          console.log(resp)
          localStorage.setItem('token', resp.data.token)
          push('/friends')
      })
      .catch(err => {
          console.log(err)
      })
}

console.log(formData)

    return(
      <div>
        <h2>Add Friend</h2>
        <form onSubmit={submitFriendForm}>
            <div>
                <label htmlform='name'>Name:</label>
                <input onChange={handleChange} name='name' id='name'/>
            </div>

            <div>
                <label htmlform='age'>Age:</label>
                <input onChange={handleChange} name='age' id='age'/>
            </div>

            <div>
                <label htmlform='email'>Email:</label>
                <input onChange={handleChange} name='email' id='email'/>
            </div> 
            <button>Click to Add the Friend</button>
        </form>
      </div>
    )
  }
  
export default AddFriend  