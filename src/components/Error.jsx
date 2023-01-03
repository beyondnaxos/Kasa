import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="error-page">
      <h1 className="big-number">404</h1>
      <h2 className="big-quote">
        Oups! La page que vous demandez n'existe pas.
      </h2>

      <Link className="redirect" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
