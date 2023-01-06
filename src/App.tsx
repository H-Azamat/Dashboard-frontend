import { LoadboardContainer, Nav } from "./components";

function App() {
  return (
    <div className="App">
      <Nav />

      <div
        style={{
          width: "100%",
          height: "100px",
          display: "block",
        }}
      ></div>

      <LoadboardContainer />
    </div>
  );
}

export default App;
