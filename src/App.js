import Header from "./components/header";
import Headline from "./components/headline";
import './app.scss';

const tempArr =[
  {
    firstname:'Lavanya',
    lastName:'Ch',
    email:'lavanya.ch@abc.com',
    age:25,
    onlineStatus:true
  }
]
function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='main'> 
        <Headline header={'Posts'} desc={'Click to see posts!'} tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
