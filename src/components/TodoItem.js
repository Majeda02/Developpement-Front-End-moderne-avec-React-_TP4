function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
        />
        <span style={{ textDecoration: tache.terminee ? 'line-through' : 'none' }}>
          {tache.texte}
        </span>
      </div>
      <button
        onClick={() => supprimerTache(tache.id)}
        className="btn btn-danger btn-sm"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
