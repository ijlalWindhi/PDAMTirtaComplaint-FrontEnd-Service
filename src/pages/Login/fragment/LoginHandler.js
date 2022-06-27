import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export default async function LoginHandler(values) {
const LOGIN_URL = API_URL + 'user/login'
  try{
    await axios.post(LOGIN_URL, values)
    .then(res => {
      // reload page
      window.location.reload()

      // save data to local storage
      localStorage.setItem('item', JSON.stringify(res.data.data))

      // check falid username and password
      if(res.data.logged === true){
        // check role
        alert('Login Success')
        if(res.data.data.role === 'admin'){
          window.location.href = '/admin'
        } else if(res.data.data.role === 'user'){
          window.location.href = '/user'
        }
        } else {
            if(res.data.message === "Invalid Password"){
                alert(res.data.message)
            }else if(res.data.message === "User does not exist"){
                alert(res.data.message)
            }
        }
    })
  } catch(err){
    console.log(err)
  }
}
