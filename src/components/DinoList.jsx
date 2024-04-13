/* eslint-disable react/prop-types */
import noPhoto from '../assets/images/noPhoto.jpg'

const DinoList = ({ dinoQuery, dinoSearch, onSelectedDino }) => {
  return (
    <div className='flex justify-center'>
      <ul className='flex flex-wrap justify-center gap-10 w-9/12'>
        {dinoQuery
          .filter(item =>
            item.name.toLowerCase() === ''
              ? item
              : item.name.toLowerCase().includes(dinoSearch.toLowerCase())
          )
          .map(dino => (
            <li
              key={dino.name}
              onClick={() => onSelectedDino(dino.id)}
              className='rounded-lg hover:scale-110 transition-all flex items-center justify-between flex-col flex-auto border-solid border-slate-600 xs:w-9/12 sm:w-5/12  md:w-3/12 shadow-lg shadow-slate-950 p-4 gap-3'
            >
              <img
                src={dino.imageSrc == 'N/A' ? noPhoto : dino.imageSrc}
                alt={dino.name}
                className='m-auto '
              />
              <button className='text-blue-800 sm:text-xs md:text-lg '>{dino.name}</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default DinoList
