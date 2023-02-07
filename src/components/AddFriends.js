import React from 'react'

const AddFriend = () => {
    return(
      <div>
        <h2>Add Friend</h2>
        <form>
            <div>
                <label htmlForm='username'>Username:</label>
                <input id='usersame'/>
            </div>

            <div>
                <label htmlForm='age'>Age:</label>
                <input id='age'/>
            </div>

            <div>
                <label htmlForm='email'>Email:</label>
                <input id='email'/>
            </div> 
        </form>
        <button>Click to Add the Friend</button>
      </div>
    )
  }
  
export default AddFriend  