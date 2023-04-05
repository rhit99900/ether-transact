import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Main from './Pages/Main.page'

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Web 3.0 Exploration</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <Main />
    </div>
  )
}

export default App
