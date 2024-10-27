import React from "react";
import Hero from "../../components/hero";
import Brands from "../../components/Brands";
import Footer from "../../components/footer";
import Team from "../../components/Team";
import FAQ from "../../components/FAQ";
import RoadMap from "../../components/RoadMap";
import About from "../../components/About/About";
import Loader from "../../components/Loader";

const Home = (props) => {
  return (
    <>
    <div className=" tw-overflow-x-hidden">
      <Hero isRegister={props.isRegister}/>
      <div className=" tw-overflow-x-hidden">
        <Brands />
      </div>
      <About />
      <Team />
      <RoadMap />
      <FAQ />
      <Footer />

    </div>
    {props.loader && <Loader />}

    </>
  );
};

export default Home;
