import "./App.css";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";
import ThirdPage from "./components/ThirdPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
