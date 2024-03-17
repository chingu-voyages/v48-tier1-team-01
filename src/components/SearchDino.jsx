// eslint-disable-next-line react/prop-types
const SearchDino = ({ dinoSearch, onDinoSearch }) => {
  return (
    <>
      <h3>Search your favorite Dinosaur</h3>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          value={dinoSearch}
          onChange={e => {
            onDinoSearch(e.target.value)
          }}
        />
      </form>
    </>
  )
}
export default SearchDino
