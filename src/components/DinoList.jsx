/* eslint-disable react/prop-types */

const DinoList = ({ dinoQuery, dinoSearch, onSelectedDino }) => {
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
            <button onClick={() => onSelectedDino(dino.id)}>{dino.name}</button>
          </li>
        ))}
    </ul>
  )
}

export default DinoList
