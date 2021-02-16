import { useState } from 'react'
import './Card.css'

function Card({ name, species, image, status, gender }) {
  const [moreInfo, setMoreInfo] = useState(false)

  return (
    <>
      <section className="Card">
        <h3>
          {name} <span>({species})</span>
        </h3>

        <img src={image} alt="" />

        <button onClick={() => setMoreInfo(!moreInfo)}>More Info</button>
        <div hidden={!moreInfo}>
          <div>{status}</div>
          <div>{gender}</div>
        </div>
      </section>
    </>
  )
}

export default Card
