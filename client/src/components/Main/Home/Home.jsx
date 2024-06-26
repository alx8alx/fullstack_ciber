import React, { useRef } from "react";
import fotoprincipal from "../../../assets/estudiantessonriendo.jpg"
import Contact from '../Contact/Contact'

const Home = () => {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth"});
    }
  }
  return (
    <>
      <section className="home">
        <img className="principal" src={fotoprincipal}></img>

        <article className="textofondo">
          <h3 className="primerafrase" >En Beyond education te acompañamos en cada decisión que tomes,</h3>
          <h3 className="segundafrase" >elige la orientación que necesitas</h3>
        </article>

        <article ref={contactRef}>
          <Contact />
        </article>
      </section>
    </>
  )
};

export default Home;
