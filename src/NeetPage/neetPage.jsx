import React from "react";
import Navbar from "../component/Navbar";
import Section from "../component/card";

export default function Neetpage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:flex  justify-around ">
        <Section
          subject_name="Physics"
          logo="/public/physics logo.jpg"
        ></Section>
        <Section
          subject_name="Chemistry"
          logo="/public/chem logo.jpg"
        ></Section>
        <Section subject_name="Biology" logo="/public/bio image.jpeg"></Section>
      </div>
    </>
  );
}
