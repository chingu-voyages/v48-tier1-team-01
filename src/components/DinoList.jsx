/* eslint-disable react/prop-types */

const DinoList = ({ dinoQuery, dinoSearch, onSelectedDino }) => {
  return (
    <ul className='flex flex-wrap justify-center gap-10  w-9/12 '>
      {dinoQuery
        .filter(item =>
          item.name.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(dinoSearch.toLowerCase())
        )
        .map(dino => (
          <li
            key={dino.id}
            className='flex items-center justify-between flex-col flex-grow  border-solid border-slate-600  w-3/12 shadow-md p-4 gap-3'
          >
            <img src={dino.imageSrc} alt={dino.name} className='m-auto' />
            <button onClick={() => onSelectedDino(dino.id)} className='text-blue-400 text-2xl'>
              {dino.name}
            </button>
          </li>
        ))}
    </ul>
  )
}

export default DinoList
