import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { useHistory } from "react-router-dom";
import { auth } from "../Config/Config";

export const Home = ({ user }) => {
  const history = useHistory();

  useEffect(() => {
    // forcing user to signup
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <div className="wrapper">
      <Hero />
      {/* <Navbar user={user} />
            <Products /> */}
    </div>
  );
};
