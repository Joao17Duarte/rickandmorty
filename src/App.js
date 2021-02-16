import data from './rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        {data.results.map(character => (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
          />
        ))}
      </div>
    </>
  )
}

export default App
