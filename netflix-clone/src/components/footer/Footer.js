import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Job</li>
              <li>Cookie Preferances</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>Service code</p>
        </div>
        <div className='copy_right'>
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer