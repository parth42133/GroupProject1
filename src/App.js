import React from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CoursePage from "./components/CoursePage";
import ContactPage from "./components/ContactPage";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./components/Footer";

function App() {
  return (
   
      <div className="App">
        <Header />
        <main>
          <section id="home"><Homepage /></section>
          <section id="courses"><CoursePage /></section>
          <section id="events"><UpcomingEvents /></section>
          <section id="contact"><ContactPage /></section>
        </main>
        <Footer />  
      </div>
    
  );
}

export default App;