import React from "react";
import Navbar from "./components/Navbar";
// import MainPage from './pages/main-page/MainPage'
// import MainPage from './pages/kalari-page/MainPage'
// import MainPage from './pages/yoga-page/MainPage'
import YogaFooter from "./components/YogaFooter";
import ContactForm from "./pages/contact-form/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <MainPage/> */}
      <ContactForm />
      <YogaFooter />
    </div>
  );
};

export default App;
