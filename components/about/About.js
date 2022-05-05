import './about.css'
import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="about " />
        </div>
      </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small> 3+ Years Working Experience</small>
          </article>
          
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article>         
        </div>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Eqaue eos voluptatem eius dolorem
          maiores nihil ducimus at rem ullam reprehenderit quidem
          quia deserut,molestiae,eligendi amet repellat molestias quos
          totam.
          Lorem ipsum dolor sit amet sonectetur adipsicing elit. Eqaue 
          eso voluptatem eius dolorem mairoes nihil ducimus at rem ullam
          m reprehenderit quidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
        </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About