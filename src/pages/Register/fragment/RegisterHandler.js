import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export default async function RegisterHandler(values) {
const REGISTER_URL = API_URL + 'user/register'
  try{
    await axios.post(REGISTER_URL, values)
    .then(res => {
      // reload page
      window.location.reload()
      // check falid username and password
      if(res.data.status === 'success'){
        alert('Register Success')
        // navigate page to login
        window.location='/login'
      } else {
          if(res.data.message === "Username already exist"){
              alert(res.data.message)
          }else if(res.data.message === "Email already exist"){
              alert(res.data.message)
          }
      }
    })
  } catch(err){
    console.log(err)
  }
}
