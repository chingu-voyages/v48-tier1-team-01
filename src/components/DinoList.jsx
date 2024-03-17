/* eslint-disable react/prop-types */

const DinoList = ({ dinoQuery, dinoSearch }) => {
  return (
    <ul>
      {dinoQuery
        .filter(item =>
          item.name.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(dinoSearch.toLowerCase())
        )
        .map(dino => (
          <li key={dino.id}>
            {/* <img src={dino.imageSrc} alt={dino.name} /> */}
            <p>{dino.name}</p>
          </li>
        ))}
    </ul>
  )
}

export default DinoList
