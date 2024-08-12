import React from "react";
import Section from "../component/card";
import Navbar from "../component/Navbar";

export default function Jeepage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row justify-around flex-wrap w-screen">
        <Section
          subject_name="Physics"
          logo="/public/physics logo.jpg"
        ></Section>
        <Section
          subject_name="Chemistry"
          logo="/public/chem logo.jpg"
        ></Section>
        <Section subject_name="Maths" logo="/public/maths image.jpeg"></Section>
      </div>
    </>
  );
}
