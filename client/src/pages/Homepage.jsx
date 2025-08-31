import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "../styles/Homepage.css";
import FlipTimer from "../components/FlipTimer";
import Desc from "../components/Desc";
import Footer from "../components/Footer";
function Homepage() {
  return(
    <>
      <div className="bg">
      <div className="page-container pt-10">
        <Title />
        {/* <FlipTimer /> */}
        {/* <Desc /> */}
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Homepage