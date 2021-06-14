import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import QuizData1 from "../data/question";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} data={QuizData1} />
      <Footer />
    </div>
  );
}

export default MyApp;
