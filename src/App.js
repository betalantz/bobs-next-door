import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {

  const [stores, setStores] = useState([])
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then(response => response.json())
      .then(storesArr => setStores(storesArr))
  }, [])

  function addStore(newStore){
    setStores([newStore, ...stores])
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Show Form" : "Hide Form"}</button>
      {showForm ? null : <NewStoreForm onSubmitStore={addStore} />}
      <StoreList stores={stores}/>
    </div>
  );
}

export default App;
