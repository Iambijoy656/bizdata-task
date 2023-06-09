import React from "react";
import Banner from "../Banner/Banner";
import Advertise from "../Advertise/Advertise";
import BusinessSection from "../BusinessSection/BusinessSection";
import Administration from "../Administration/Administration";
import GoalSection from "../GoalSection/GoalSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertise></Advertise>
      <BusinessSection></BusinessSection>
      <Administration></Administration>
      <GoalSection></GoalSection>
    </div>
  );
};

export default Home;
