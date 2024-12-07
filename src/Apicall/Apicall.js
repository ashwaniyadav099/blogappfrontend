import axios from 'axios'


const signupcall= (data)=>{

const fordata = new FormData()
fordata.append('email' ,data.email )
fordata.append('password' ,data.password )
fordata.append('phone' ,data.phone )
fordata.append('username' ,data.username )
fordata.append('userImage' ,data.userImage[0] )

  axios.post('http://localhost:6002/user/signup' , fordata).then((res)=>{
     console.log(res)
  })
}

export default signupcall