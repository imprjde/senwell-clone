import "./App.css";
import Animation from "./components/Animation";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Industries from "./components/Industries";
import Introduction from "./components/Introduction";
import OurWork from "./components/OurWork";
import Review from "./components/Review";
import Rewards from "./components/Rewards";
import Services from "./components/Services";
import TopScroller from "./components/TopScroller";

function App() {
  return (
    <div className="App">
      <div className="md:hidden min-h-screen h-full m-auto flex justify-center items-center  bg-gray-900 ">
        <span className="text-white text-justify font-medium text-xl tracking-wider">
          This Senwell website can only
          <br /> be viewed on Desktop screens.
        </span>
      </div>
      <div className="hidden md:block ">
        <TopScroller />
        <Header />
        <Banner />
        <Introduction />
        <Animation />
        <Services />
        <Clients />
        <Review />
        <Rewards />
        <Industries />
        <OurWork />
        <Footer />
      </div>
    </div>
  );
}

export default App;
