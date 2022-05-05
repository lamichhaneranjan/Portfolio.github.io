import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'


const data = [
  {
  id: 1,
  image:IMG1,
  title:'Cryto Currency Dashboard',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/18099259-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-appss'
},
{
  id:2,
  image:IMG2,
  title:'Cryto Currency Dashboard',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/18013196-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id:3,
  image:IMG3,
  title:'Cryto Currency Dashboard',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17992247-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
  id : 4,
  image:IMG4,
  title:'Cryto Currency Dashboard',
  github:'https://github.com',
  demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualizaion'
},
{
  id:5,
  image:IMG5,
  title:'Cryto Currency Dashboard',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/18044449-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
}
]
const Portfolio = () => {
  return (
   <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>

<div className='container portfolio_container'>
  {
  data.map(({id,image,title,github,demo}) => {
    return(
      <article key={id} className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
        <div className='portfolio_item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
        </div>
      </article>
    )
    })
  }
</div>
   </section>
  )
}

export default Portfolio