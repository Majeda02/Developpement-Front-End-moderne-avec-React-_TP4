import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache }) {
  if (taches.length === 0) {
    return <p className="text-muted">Aucune tâche pour le moment.</p>;
  }

  return (
    <ul className="list-group">
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;
