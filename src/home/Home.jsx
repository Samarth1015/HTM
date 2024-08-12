import { useEffect } from "react";
import Hero_section from "../component/heroSection";
import Navbar from "../component/Navbar";
import axios from "axios";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero_section></Hero_section>
    </>
  );
}
