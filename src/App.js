
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';
import List from './components/List';

function App() {


  const nome = "NomeEmVariavel"

  return (
    <div className="App">
      <h1>Seja Bem vindo ao YOUCAN</h1>
      <HelloWorld />
      <Frases/>
      
      <SayMyName nome="Vinicius"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Vinicius 2"
        idade="20"
        profissao="Programador"
        foto = "https://via.placeholder.com/150"/>

      <List/>
    </div>
  );
}

export default App;
