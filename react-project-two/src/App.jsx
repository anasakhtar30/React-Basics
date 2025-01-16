import UserCard from './components/UserCard'
import chamelion from './assets/chamelion.jpeg'

// Components(.jsx) -> function that is combination of html + js code.
function App() {

  return (
    <>
     <UserCard
      name = "Love Rana" // name is props
      desc = "desc1"
      image = {chamelion} 
      style = {{"borderRadius":"10px"}}/>

     <UserCard 
     name = "Maharana pratap"
     desc = "desc2" 
     image = {chamelion}
     style = {{"border-radius":"10px"}}/>
     
     <UserCard 
     name = "PrithviRaj chauhan" 
     desc = "desc3" 
     image = {chamelion} 
     style = {{"border-radius":"10px"}}/>
    </>
  )
}

export default App
