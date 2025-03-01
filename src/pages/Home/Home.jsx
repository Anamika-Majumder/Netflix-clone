import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/cards/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../Components/TitleCard/TitleCard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner}  alt='' className='img-banner'></img>
        <div className="hero-caption">
          <img src={hero_title} alt='' className='caption-img'></img>
          <p>Discovering his ties ti a secret ancient order, a young man living in modern Istanbul embark on a quest to say city fron an immoral enemy</p>
          <div className="hero-btns">
            <button className='btn'><img src={ Play_icon} alt=''/>   Play </button>
            <button className='btn dark-btn'><img src={ info_icon} alt=''/>   More Info </button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={"Blockbuster Movies"}category={"top_rated"}/>
      <TitleCard title={"Only on Netflix"} category={"popular"}/>
      <TitleCard title={"Upcoming"} category={"upcoming"}/>
      <TitleCard title={"Top pics for you"}  category={"top_rated"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
