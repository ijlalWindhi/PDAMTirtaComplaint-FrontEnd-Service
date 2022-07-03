import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export default async function RegisterHandler(values) {
const PENGADUAN_URL = API_URL + 'report/add'
  try{
    await axios.post(PENGADUAN_URL, values)
    .then(res => {
      // reload page
      window.location.reload()
      alert('Success Memberikan pengaduan')
      // navigate page to login
      window.location='/dukungan'
    })
  } catch(err){
    console.log(err)
  }
}
