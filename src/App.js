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

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
