import hero from "./Hero.module.css"
import bg from "../../assets/bg.png"


const HeroSection = () => {
  return (

    <div className={hero.container}>
        <img src={bg} alt="Hero Banner" />
    </div>
    
  )
}

export default HeroSection