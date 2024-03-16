/* eslint-disable react/prop-types */

const DinoList = ({ dinoQuery }) => {
  return (
    <ul>
      {dinoQuery.map(dino => (
        <li key={dino.id}>
          <img src={dino.imageSrc} alt={dino.name} />
          <p>{dino.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default DinoList
