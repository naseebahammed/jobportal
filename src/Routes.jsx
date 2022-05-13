import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import CandidateLogin from "./Pages/Candidate/CandidateLogin";
import Home from "./Pages/Home/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route path="/candidatelogin" element={<CandidateLogin />} />
    </Switch>
  );
}
export default Routes;
