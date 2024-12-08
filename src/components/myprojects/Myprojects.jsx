import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.jpg'
import IMG6 from '../../assets/img6.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Big Data Indexing</h3>
            <small className='text-light'>Node.js | Docker | Elasticsearch | Kibana | RabbitMQ | Shell</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/QiaotongHuang/Big-Data-Application-and-Indexing" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Uniswap Foundry</h3>
            <small className='text-light'>Ethereum | Foundry | Solidity Testing</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/QiaotongHuang/Uniswap_foundry" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Recommendation System</h3>
            <small className='text-light'>Flask | SVD | ALS | React.js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/QiaotongHuang/An-end-to-end-book-recommendation-system" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Yes Play Music</h3>
            <small className='text-light'>Vue.js | Restful API | Vercel</small>
            <div className="portfolio__item-cta">
              <a href="https://yes-play-music-qiaotonghuang.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Car Price Alert</h3>
            <small className='text-light'>Selenium | Web Scraping | Google OAuth</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/QiaotongHuang/Car_Price_Alert_System" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Dutch Auction</h3>
            <small className='text-light'>Solidity | React.js | Hardhat | IPNS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/QiaotongHuang/DutchAuction" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects