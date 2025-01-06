
import { useState } from 'react'
import './App.css'
import Card from './Card'
import CardForm from './CardForm';
function App() {
    const [cards, setCards] = useState([]);

    const handleAddCard = (newCard) => {
      setCards([...cards, newCard])
    }
  return (
    <>
    <div className='App'>
      <CardForm onAddCard={handleAddCard}/>
      {cards.map((card, index) => (
        <Card key={index} {...cards}/>
      ))}
    </div>
    
    </>
  )
}

export default App
