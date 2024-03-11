/* eslint-disable react/prop-types */

const DinoList = ({ dinoList }) => {
  return (
    <ul>
      {dinoList.map(dino => (
        <li key={dino.id}>{dino.name}</li>
      ))}
    </ul>
  )
}

export default DinoList
