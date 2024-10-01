import './App.css';
import { useFactCat } from './hooks/useFactCat';
import { useImgFactCat } from './hooks/useImgFactCat';

function App() {
  const {fact, refreshFact} = useFactCat()
  const {imgFact} = useImgFactCat({fact})
  
  return (
    <main>
      <button onClick={refreshFact}>Actualizar gatetes</button>
      {fact && <p>{fact}</p>}
      {imgFact && <img src={imgFact} alt="Cat saying fact" />}
    </main>
  );
}

export default App;
