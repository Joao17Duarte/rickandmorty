import './Card.css'

function Card({ name, species, image }) {
  return (
    <>
      <section className="Card">
        <h3>
          {name} (<span>{species}</span>)
        </h3>

        <img src={image} alt="" />
      </section>
    </>
  )
}

export default Card
