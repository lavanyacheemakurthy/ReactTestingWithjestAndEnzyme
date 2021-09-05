import Header from "./components/header";
import Headline from "./components/headline";
import './app.scss'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='main'> 
        <Headline header={'Posts'} desc={'Click to see posts!'}/>
      </section>
    </div>
  );
}

export default App;
