// eslint-disable-next-line no-unused-vars
import React from 'react'
import b from '../../assets/images/b.jpg'
// import aboutCarding from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
<section>
<div className='container'>
    <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img className='w-[550px]' src={b} alt="" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] md:w-[300px] right-[30%] md:right-[-10%] lg:right-[22%]'>
                {/* <img src={aboutCarding} alt="" /> */}
            </div>
        </div>


        <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Welcome to MantraCare, where your well-being is our top priority.</h2>
            <br />
            <p className='text__para'>Our mission is to provide high quality mental health care services online throughout Ethiopia, and to do this we bring to you MantraCare. We envision MantraCare to be the place where the diverse Ethiopian public can come too and freely discuss the issues they have in mind. We say the Ethiopian public, because it is specially curated for them with their special requirements inkept throughout the process of building the site. They will be able to get the treatment they need from a trained professional and get the support of the brilliant Mantra-team and Mantra-Community. Mental health care has never been easier.</p>
            <p className='text__para mt-[30px]'>There's nothing else like it, so take a look around and let us know what's on your mind .</p>
        </div>
    </div>
</div>
</section> 
 )
}

export default About;