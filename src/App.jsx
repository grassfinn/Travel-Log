import React from 'react'
import './index.css'
import data from './assets/data.js'
import Card from './components/card.jsx'
import Header from './components/header.jsx'

function App() {

  // map through data and return a card for each array item
  const cards = data.map( item => {
    return (
      <Card
      // props
        key= {item.id}
        // spreads all the props such as item.img etc....
        {...item}
      />
    )
  })

  return (
    <div className="App">
        <Header/>
        <section className='card-container'>
          {cards}
        </section>
    </div>
  )
}

export default App


// create card template
// filter through the cards and render each card based off the data of each object