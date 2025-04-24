import React from 'react'
import serviceImg1 from '../../assets/strategic-planning.jpg'
import serviceImg2 from '../../assets/team-building.jpg'
import serviceImg3 from '../../assets/online-learning.jpg'
import './Service.css'; 

const Service = () => {
  return (
    <div className='service-container'>
    <div className='service-title'>
      <h1>What We Do</h1>
      </div>
      <div className='service-content'>
        <div className='service-detail'>
          <h2>Strategic Planning & Business Development</h2>
          <img src={serviceImg1} alt="service" className='serviceImg' />
          <p>We assist organizations in defining their strategic vision,
            setting achievable goals, and creating comprehensive plans
            to drive growth and profitability.
            Our team helps businesses identify new markets,
            develop competitive strategies, manpower development,
            and align their operations with long-term objectives.</p>
        </div>
  
        <div className='service-detail'>
          <h2>Team Building</h2>
          <img src={serviceImg2} alt="service" className='serviceImg spanImage service-desc' />
          <p><span>We offer customized team-building programs
            including group dynamics, behavioral assessments, 
            and bootcamps. Aligning teams, enhancing performance.</span></p>
        </div>
        <div className='service-detail'>
           <h2>Online Learning Support</h2>
           <img src ={serviceImg3} alt="service" className='serviceImg spanImage' />
           <p>Foundational courses aimed at equipping
             aspiring business persons with essential skills to start
              and grow their businesses.
              <br/>
              Online and in-person formats, 
              accessible to micro-business owners and large corporates.</p>
              </div>
      </div>
  
  </div>
  
          

      
  )
}

export default Service
