import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false
    };
    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">📝 To-Do List Interactive</h1>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={taches}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
      />
    </div>
  );
}

export default App;
