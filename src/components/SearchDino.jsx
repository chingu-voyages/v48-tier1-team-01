// eslint-disable-next-line react/prop-types
const SearchDino = ({ dinoSearch, onDinoSearch }) => {
  return (
    <>
      <h3 className='block text-sm font-medium leading-6 text-gray-900 text-center'>
        Search your favorite Dinosaur
      </h3>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          value={dinoSearch}
          onChange={e => {
            onDinoSearch(e.target.value)
          }}
          className='mx-auto block text-center w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
      </form>
    </>
  )
}
export default SearchDino
