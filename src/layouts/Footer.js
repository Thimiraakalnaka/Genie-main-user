import React from 'react'
import Logo from '../assets/logo.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
        <div className='flex bg-[#8DD4F1] gap-[150px] text-left py-[80px] px-[120px] mx-auto justify-between'>
        <div>
            <img className='w-[220px] h-[150px]' src={Logo} alt=''></img>
        </div>
        <div>
            <h1 className='font-bold text-[18px]'>Help</h1>
            <div>Help center</div>
            <div>Complain</div>
        </div>
        <div>
            <h1 className='font-bold text-[18px]'>About Genie</h1>
            <div>Company info</div>
            <div>News</div>
            <div>Careers</div>
            <div>Policies</div>
        </div>
        <div>
            <h1 className='font-bold text-[18px]'>Stay Connected</h1>
            <div className=''>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <WhatsAppIcon/>
                <YouTubeIcon/>
            </div>
            
        </div>
    </div>
    <h1 className='bg-[#8DD4F1] text-gray-700 text-left pl-[120px] pb-[50px] font-bold text-[18px]'>Copyright 2024 Genie (Pvt) Limited.All rights reserved</h1>
    </div>
  )
}

export default Footer