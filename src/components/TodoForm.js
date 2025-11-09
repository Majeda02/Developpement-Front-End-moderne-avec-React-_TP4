import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') {
      alert("Veuillez saisir une tâche !");
      return;
    }
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire} className="d-flex gap-2 mb-3">
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
        className="form-control"
        required
      />
      <button type="submit" className="btn btn-primary">Ajouter</button>
    </form>
  );
}

export default TodoForm;
