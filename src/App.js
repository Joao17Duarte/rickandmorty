import data from './rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        {data.results.map(({ name, species, image, id, status, gender }) => (
          <Card
            key={id}
            name={name}
            species={species}
            image={image}
            status={status}
            gender={gender}
          />
        ))}
      </div>
    </>
  )
}

export default App
