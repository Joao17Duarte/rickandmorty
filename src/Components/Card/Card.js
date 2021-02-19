import { useState } from 'react'
import Button from '../Button/Button'
import './Card.css'

export default function Card({
  name,
  species,
  image,
  status,
  gender,
  origin,
  location,
}) {
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  return (
    <section className="Card">
      <h2>{name}</h2>

      <p>{species}</p>
      <img src={image} alt="" />
      <Button
        title={isShowingDetails ? 'Hide Details' : 'Show Details'}
        onClick={() => setIsShowingDetails(!isShowingDetails)}
      />
      <ul hidden={!isShowingDetails}>
        <li>Status: {status} </li>
        <li>Gender: {gender}</li>
        <li>Origin: {origin} </li>
        <li>Location: {location}</li>
      </ul>
    </section>
  )
}
