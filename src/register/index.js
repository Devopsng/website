import React from "react";
import Nav from "../components/nav";
import Header from "./header";
import RegisterComponent from "./register";
import Footer from "../components/footer";

function Register() {
  return (
      <div className="body_wrapper">
          <Nav/>
          <Header />
          <RegisterComponent />
          <Footer />
      </div>
  );
}

export default Register;
