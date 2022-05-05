import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience">
     <h5>What Skills I Haveta</h5>
     <h2>My Experience</h2>

     <div className='container experience_container'>
      <div className='experience_frontend'>
         <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
             <div> <h4>HTML</h4>
              <small className='text-light'> Exprerienced</small>
              </div></article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>CSS</h4>
              <small className='text-light'> Intermediate</small>
              </div></article><article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>JS</h4>
              <small className='text-light'> Intermediate</small>
              </div></article><article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>REACT</h4>
              <small className='text-light'> Intermediate</small>
              </div></article><article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>BOOTSTRAP</h4>
              <small className='text-light'> Exprerienced</small>
              </div></article>
          </div>
      </div>
      <div className='experience_backend'>
      <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>MONGODB</h4>
              <small className='text-light'> Basic</small>
                </div></article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
            <div><h4>PHP</h4>
              <small className='text-light'> Basic</small>
              </div></article><article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>PYTHON</h4>
              <small className='text-light'> Intermediate</small>
              </div></article><article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
             <div> <h4>MYSQL</h4>
              <small className='text-light'> Intermediate</small>
              </div></article><article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>NODEJS</h4>
              <small className='text-light'> Exprerienced</small>
              </div> </article>
      </div>
       </div>
   </section>
  )
}

export default Experience