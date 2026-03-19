import React, { useState } from 'react'

function RecipeCard({ r, onSelect }){
  const [imgError, setImgError] = useState(false)

  return (
    <article className="card" onClick={() => onSelect(r.id)}>
      {!imgError && r.image ? (
        <img src={r.image} alt={r.title} className="thumb" onError={() => setImgError(true)} />
      ) : (
        <div className="thumb-fallback" aria-hidden>
          <div className="fallback-text">{r.title}</div>
        </div>
      )}

      <div className="card-body">
        <h3>{r.title}</h3>
        <p className="muted">{r.description}</p>
        <div className="meta">{r.ingredients.slice(0,3).join(', ')}{r.ingredients.length>3 ? '...' : ''}</div>
      </div>
    </article>
  )
}

export default function RecipeList({ recipes, query, setQuery, onSelect }){
  return (
    <div className="list-page">
      <div className="controls">
        <input
          aria-label="Search recipes"
          placeholder="Search recipes by ingredient or title..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="count">{recipes.length} recipes</div>
      </div>

      <div className="grid">
        {recipes.map(r => <RecipeCard key={r.id} r={r} onSelect={onSelect} />)}
      </div>

      {recipes.length === 0 && <p className="no-results">No recipes match your search.</p>}
    </div>
  )
}
