import Header from "./components/Header";
import City from "./components/City";

function App() {
  return (
    <>
      <Header text="Weather App" />

      <div className="container">
        <City />
      </div>
    </>
  );
}

export default App;
