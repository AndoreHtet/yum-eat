
import './App.css'
import TopNav from './Components/TopNav'
import Delivery from './Components/Delivery'
import TopPicks from './Components/TopPicks'
import Categories from './Components/Categories'
import NewsLetter from './Components/NewsLetter'
import Footer from './components/Footer'
import Meal from './components/Meal'
import Featured from './components/Featured'


function App() {
 

  return (
    <>
    <TopNav/>
    <Featured></Featured>
    <Delivery></Delivery>
    <TopPicks></TopPicks>
    <Meal></Meal>
    <Categories></Categories>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    </>
  )
}

export default App
