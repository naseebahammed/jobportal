import React from "react";
import Hero from "../../comp/Hero/Hero";
import JobList from "../Jobs/JobList";
import JobCategories from "../Jobs/JobCategories";
import NewsLetter from "../../comp/NewsLetter/NewsLetter";
function Home() {
  return (
    <>
      <Hero />
      <JobList />
      <JobCategories />
      <NewsLetter />
    </>
  );
}
export default Home;
