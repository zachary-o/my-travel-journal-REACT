import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

const cards = data.map((item) => {
  return <Card item={item}/>
})

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <section className="cards-container">{cards}</section>
    </div>
  );
};

export default App;
