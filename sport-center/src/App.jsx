
import './App.css'
import BMICalculator from './components/BMICalculator'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurClasses from './components/OurClasses'
import PowerfullInfo from './components/PowefullInfo'
import Purchase from './components/Purchase'
import ReviewClient from './components/ReviewClient'
import Trainers from './components/Trainers'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <PowerfullInfo/>
    <OurClasses/>
    <BMICalculator/>
    <Trainers/>
    <Purchase/>
    <ReviewClient/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
