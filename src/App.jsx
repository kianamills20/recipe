import React, { useState } from 'react'
import recipesData from './data/recipes'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'

export default function App(){
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const filtered = recipesData.filter(r => {
    const q = query.trim().toLowerCase()
    if(!q) return true
    return (
      r.title.toLowerCase().includes(q) ||
      r.ingredients.join(' ').toLowerCase().includes(q) ||
      (r.description || '').toLowerCase().includes(q)
    )
  })

  const selected = recipesData.find(r => r.id === selectedId) || null

  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
          <div className="logo">🌿</div>
          <h1>Herbal Recipes</h1>
        </div>
        <p className="tag">Healthy, herb-forward recipes </p>
      </header>

      <main>
        {selected ? (
          <RecipeDetail recipe={selected} onBack={() => setSelectedId(null)} />
        ) : (
          <RecipeList recipes={filtered} query={query} setQuery={setQuery} onSelect={id => setSelectedId(id)} />
        )}
      </main>

      <footer className="site-footer">Made with herbs · Health-focused </footer>
    </div>
  )
}
