import "./App.css";
import dentista from "./assets/dentista3.jpg";
import { motion } from "framer-motion";
import ecommerce from "./assets/ecommerce.jpg"; 
import barberia1 from "./assets/barberia1.jpg"
import gym10 from "./assets/gym10.jpg"
import gym11 from "./assets/gym11.jpeg"
import gym12 from "./assets/gym12.webp"
import login2 from "./assets/login2.jpg"
import whatsapp4 from "./assets/whatsapp4.jpg"
 import whatsapp5 from "./assets/whatsapp5.jpg"

function App() {
  return (
 
 
 <>
 
 
  {/* NAV */}
      <nav className="nav">
        <h2>Zenith Labs</h2>
        <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn">Get Started</a>
      </nav>


 <div className="container">

    
      {/* HERO */}
     


<section className="hero">
  <motion.div
    className="hero-box"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1> Landing Pages That Convert</h1>
    <p>Modern, fast and high-converting websites for businesses</p>

    <motion.a
      href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio"
      className="btn big"
      whileHover={{ scale: 1.05 }}
    >
      Work With Me
    </motion.a>
  </motion.div>
</section>






      {/* SERVICES */}
      <section className="section">
        <h2>What We Do</h2>

        <div className="grid">

  <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <img src= {barberia1} />

  <h3> Landing Pages</h3>
            <p>Designed to convert visitors into clients</p>

  <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn">
    Learn More
  </a>
</motion.div>


{/* 
          <div className="card">
            <h3>Landing Pages</h3>
            <p>Designed to convert visitors into clients</p>
          </div> */}


 <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <img src={ecommerce} />

   <h3>Business Websites</h3>
            <p>Professional websites for your brand</p>

  <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn">
    Learn More
  </a>
</motion.div>



          {/* <div className="card">
            <h3>Business Websites</h3>
            <p>Professional websites for your brand</p>
          </div> */}



  <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <img src={login2} />

    <h3>Fullstack Apps</h3>
            <p>Custom systems with login and admin panels</p>

  <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn">
    Learn More
  </a>
</motion.div>


 
         {/* <div className="card">
            <h3>Fullstack Apps</h3>
            <p>Custom systems with login and admin panels</p>
          </div> */}



        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Selected Work</h2>

        <div className="grid">



  <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <img src={dentista} />
            <h3>Dentist Website</h3>
 
<br></br>
  <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn">
    View Proyect
  </a>
</motion.div>


 <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <img src={gym12} />
            <h3>Gym Website</h3>
<br></br>
  <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn">
    View Proyect
  </a>
</motion.div>


 {/* <div className="card">
            <img src={dentista} />
            <h3>Dentist Website</h3>
          </div>







          <div className="card">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" />
            <h3>Gym Website</h3>
          </div> */}






        </div>

      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h2>+15</h2>
          <p>Projects</p>
        </div>
        <div>
          <h2>+10</h2>
          <p>Clients</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Satisfaction</p>
        </div>
      </section>

 {/* PROCESS */}
      <section className="section">
        <h2>Process</h2>

        <div className="process">
          <p>01. Research</p>
          <p>02. Design</p>
          <p>03. Development</p>
          <p>04. Launch</p>
        </div>
      </section>


 {/* ABOUT */}
      <section className="section">
        <h2>About</h2>
        <p className="about">
          I'm a frontend developer behind Zenith Labs, <br></br> focused on building 
          modern and high-performing web experiences.
        </p>
      </section>

<section className="section">
  <h2>What Clients Say</h2>

  <div className="grid">

    
    
  <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <p>"Very professional work, my business improved a lot."</p>
      <span>- Local Business Owner</span>
</motion.div>
    
    

 <motion.div
  className="card apple"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* <img src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e" /> */}

    <p>"Fast delivery and great communication."</p>
      <span>- Gym Owner</span>
</motion.div>



    {/* <div className="card">
      <p>"Very professional work, my business improved a lot."</p>
      <span>- Local Business Owner</span>
    </div>


    <div className="card">
      <p>"Fast delivery and great communication."</p>
      <span>- Gym Owner</span>
    </div> */}

  </div>
</section>

      {/* CTA */}
      <section className="cta" id="contact">
        <h2>Ready to grow your business?</h2>
        <a href=" https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio" className="btn big">
          Contact Now
        </a>
      </section>

      {/* WHATSAPP */}
      {/* <a href="https://wa.me/5491123456789" className="whatsapp">
  <img src={whatsapp4} alt="WhatsApp"className="whatsapp-icon" /> 
    
      </a>   */}
     
  <div className="whatsapp-container">
        
        <motion.div
          className="whatsapp-tooltip"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
      Chat with us on WhatsApp
        </motion.div>

        <motion.a
          href="https://wa.me/5493705013558?text=Hola%20quiero%20info%20del%20servicio"
          className="whatsapp-btn"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
          whileHover={{ scale: 1.15 }}
        >
          {/* aqui abajo va la imagen y puedo poner texto tambien */}
          <img src={whatsapp4} alt="WhatsApp" />
        </motion.a>

      </div>




    </div>
  </>);
}

export default App;