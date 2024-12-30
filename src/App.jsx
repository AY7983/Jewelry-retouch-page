import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from './components/Service';
import PhotoEditing from "./components/PhotoEditing";
import ChooseUs from "./components/Choose";
import Portfolio from "./components/Portfolio";
import HowItWorks from "./components/Works";
import Pricing from "./components/Pricing";
import FrequentlyAskedQuestions from "./components/Faq";
import Contact from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Blogs from './components/Blog';
import GetInTouch from './components/GetInTouch';



function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <PhotoEditing/>
    <ChooseUs/>
    <Portfolio/>
    <Pricing/>
    <FrequentlyAskedQuestions/>
    <HowItWorks/>
    <Testimonials/>
    <Blogs/>
    <GetInTouch/>
    <Contact/>
    <Footer/>
  </>
  )
}
export default App;
