import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/FooterComp/FooterComp";
import Doctors from "../../components/Doctors/Doctors";
import Services from "../../components/Services/Services";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {

  // const getUserData = async () => {
  //   try {
  //     const res = await axios.post(
  //       "/api/v1/user/getUserData",
  //       {},
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);


  return (
    <div>
      <section id="">
      <HeroSection />
      </section>
      <section id="aboutus"> 
      <AboutUs />
      </section>
      <section id="doctors"> 
      <Doctors />
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="contactus">
      <Footer/>
      </section>
    </div>
  );
};

export default Home;
