/* eslint-disable react/prop-types */
const DinoDetails = ({ dino, onBack }) => {
  return (
    <div className="justify-self-center flex flex-col md:ml-[-20rem]">
      <div className="flex flex-col border-solid border-[1px] rounded-[1rem] md:min-w-[175%]">
        <img className="justify-center self-center" src={dino.imageSrc} alt={dino.name} />
        <div className="flex flex-col justify-center px-2 border-solid border-t-[1px] bg-[rgba(0,0,255,0.02)]">
          <h4 className="text-[2rem] font-bold py-4">{dino.name}</h4>
          {
            [
              ['Type', `${dino.typeOfDinosaur}`],
              ['Length', `${dino.length}m`],
              ['Diet', `${dino.diet}`],
              ['Lived', `${dino.whenLived}`],
              ['Type of Species', `${dino.typeSpecies}`],
              ['Description', `${dino.description}`]
            ].map(([header, desc])=>(
              <p className="text-[#999] py-1"><span className="font-bold">{header}:</span> {desc}</p>
            ))
          }
          <button className="mt-8 py-2 px-6 text-[1.1rem] border-solid border-[1px] bg-blue-600 text-white rounded-[5px]" onClick={onBack}>Back to Search</button>
        </div>
      </div>
    </div>
  )
}
export default DinoDetails
