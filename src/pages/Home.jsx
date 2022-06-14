import React from 'react'

// Importing Components 
import Benefits from '../comp/Benefits/Benefits';
import Head from '../comp/Header/Head';
import HomeProjectCards from '../comp/HomeProjectCards/HomeProjectCards';
import FAQ from '../comp/FAQ/Faq.jsx'
import Reviews from '../comp/Reviews/Reviews.jsx'
import Form from '../comp/Form/Form.jsx'


const Home = (props) => {
  return (
    <div>
        
        <Head />


        <HomeProjectCards ProjectsList={props.ProjectsList} />
        <Benefits />
        <FAQ />
        <Reviews />
        <Form />

    </div>
  )
}

export default Home