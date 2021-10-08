import background from "./home-background.jpg";
import logo from "./logo.png";

const App = () => (
  <>
    <div className="flex justify-center items-center p-4 bg-black bg-opacity-50 w-full fixed">
      <img src={logo} alt="HCC" className="w-44" />
    </div>

    <div className="relative w-full h-screen table -z-10">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ clip: "rect(0, auto, auto, 0)" }}
      >
        <div
          className="fixed table top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
      </div>
    </div>

    <div className="absolute w-full max-w-full top-19/50 z-10 text-white text-center">
      <h1 className="md:text-6xl text-5xl font-semibold text-shadow-lg">Haverford</h1>
      <h1 className="md:text-6xl text-5xl font-semibold text-shadow-lg mb-8">Coding Club</h1>

      <a
        className="px-6 py-3 bg-hcc-navy font-semibold rounded text-xl drop-shadow-lg border-hcc hover:border-white transition-colors duration-300 ease-in-out"
        href="https://forms.gle/41fMxdyKzsoUY5peA"
        target="_blank"
        rel="noreferrer"
      >
        Join today!
      </a>
    </div>
  </>
);

export default App;
