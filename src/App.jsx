
import './App.css'
import Button from './Button'
import Another from './component/Another'
import Client from './component/Client'
import Nothing from './component/Nothing'
import UserDibe from './component/UserDibe'
import UserGive from './component/UserGive'

import Display from './Display'
import MorePractice from './MorePractice'
import Practice from './Practice'
import Update from './Update'

function App() {
  
  return (
    <>
      <Button/>
      <Display/>
      <Update/>
      <Practice/>
      <MorePractice/>

      <UserDibe/>
      <UserGive/>
      <Client/>
      <Another/>
      <Nothing/>
    </>
  )
}

export default App
