import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/header";
import { Card } from "./components/card";
import { Grid } from "./components/Grid";
import { Footer } from "./components/Footer";
export default function Landing() {
  return (
    <>
      <Navbar/>
     <Header/>
     <Grid/>
     <Card/>
     <Footer/>
    </>
  ) ;
}
