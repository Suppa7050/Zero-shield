import React from 'react'
import "./Frontsection.css"
const Frontsection = () => {
  return (
    <div class='sunny'>
        <section class="section2">
        <div class="img2">
          <img src="https://img.freepik.com/free-photo/fading-blue-background_53876-88684.jpg?w=740&t=st=1686293300~exp=1686293900~hmac=532bc32306c49f2a05dcab37e96df94905086ebd8a2ea079c5120aacb030d084" style={styles.secimg}></img>
        </div>
        <div class="content2">
          <p style={{ fontWeight: "bold" }}>ZERO-DAY ATTACK</p>
          <p>Zero-day attacks exploit unknown vulnerabilities, making them highly elusive and dangerous.
            Our advanced system detects and predicts zero-day attacks, providing proactive defense.
            Stay one step ahead of cyber threats with our robust zero-day attack detection.</p>
          <a href="/about" className="aboutus">
            Read More
          </a>
          {/* <button  Link to="/about" class="aboutus">Read More</button> */}

        </div>
      </section >
      <section style={styles.Section3}>
        <div class="today">
          <p>Sign up today.</p>
        </div>
        <div class="startb">
          <a href="/scan">
            <button class="start">Get Started</button>
          </a>

        </div>
      </section>
    </div>
  )
}

export default Frontsection

const styles = {
    whiteSection: {
      backgroundColor: 'white',
      height: '400px',
    },
    image: {
      width: '60%',
      height: '50%',
      borderRadius: '0.5em',
    },
    xyz: {
      width: "30%"
    },
    secimg: {
      width: '90%',
      height: '50%',
      borderRadius: '0.5em',
    },
    Section3: {
      backgroundColor: 'white',
      height: '210px',
    },
  };