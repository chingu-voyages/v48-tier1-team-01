/* eslint-disable react/prop-types */
const DinoDetails = ({ dino, onBack }) => {
  return (
    <div>
      <h4>{dino.name}</h4>
      <img src={dino.imageSrc} alt={dino.name} />
      <p>Type: {dino.typeOfDinosaur}</p>
      <p>Length : {dino.length}m</p>
      <p>Diet: {dino.diet}</p>
      <p>Lived: {dino.whenLived}</p>
      <p>Type of Species: {dino.typeSpecies}</p>
      <p>Description: {dino.description}</p>
      <button onClick={onBack}>Back</button>
    </div>
  )
}
export default DinoDetails
