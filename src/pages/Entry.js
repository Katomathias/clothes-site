import React from 'react'
import{useTypewriter, Cursor} from 'react-simple-typewriter'

function Entry() {
    const [text]=useTypewriter({
        words: [' Developer', ' Designer', ' FreeLancer'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
      });
  return (
    <>
      {/* ======= Hero Section ======= */}
    <div className="hero1">
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Kato Mathias</h1>
        <p style={{margin: '50px'}}>I'm a
        <span style={{fontWeight:'bold', color:'white'}}>
      {text}
      </span>
      <span style={{color:'blue'}}>
      <Cursor/>
      </span>
        </p>
      </div>
      <div>
      <h1 >
      I'm a
      <span style={{fontWeight:'bold', color:'white'}}>
      {text}
      </span>
      <span style={{color:'blue'}}>
      <Cursor/>
      </span>
      
      </h1>
    </div>
    </section>{/* End Hero */}
    </div>
    </>
  )
}

export default Entry





