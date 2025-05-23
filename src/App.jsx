import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contacts from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const[playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subtitle='Our program' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
         <Title subtitle='CONTACT US' title='Get in Touch'/>
         <Contacts/>
         <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
