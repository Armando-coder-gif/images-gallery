import  {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';


const UNPLASH_KEY = process.env.REACT_APP_UNPLASH_KEY; 


const App = () =>{
  const [word, setWord] = useState('');


  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    console.log(word); // get the value written 
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;

/*
e = parameter
Question to my brother:
always I have to search the values with .values?
e.target[0].value

target elemento del dom
como p, h1, div


Note: Anytime when state of component changes, 
component is re-rendered.

fetch is a promise

*/