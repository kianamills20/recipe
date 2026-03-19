import React, { useState } from 'react'

export default function RecipeDetail({ recipe, onBack }){
  const [imgError, setImgError] = useState(false)

  return (
    <div className="detail">
      <button className="back" onClick={onBack}>← Back</button>
      <h2>{recipe.title}</h2>

      {!imgError && recipe.image ? (
        <img src={recipe.image} alt={recipe.title} className="detail-img" onError={() => setImgError(true)} />
      ) : (
        <div className="detail-fallback">
          <div className="fallback-title">{recipe.title}</div>
        </div>
      )}

      <p className="muted">{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing,i) => <li key={i}>{ing}</li>)}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((s,i) => <li key={i}>{s}</li>)}
      </ol>
    </div>
  )
}
