import './Style.css'
import { useEffect } from 'react'
import { getHosting } from '../../service/hosting'
import { getGuestByRg } from '../../service/guest'



function Home() {

  useEffect(() => {
    getHosting().then((hostings) => {
      console.log(hostings)
    })

    getGuestByRg("111439315").then((guest) => {
      console.log(guest)
    })
  })
  
  return (
    <>
      <h1>Bem-vindo à pousada do galdino</h1>
    </>
  )
  
}



export default Home
