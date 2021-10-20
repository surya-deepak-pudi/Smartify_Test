import { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => {
  const { name, setValue, initialValue } = props

  const [searchTerm, setSearchTerm] = useState(initialValue)

  const handleChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(searchTerm)
  }
  return (
    <div className="search-container">
      <form
        name="Search"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <input
          className="search-input"
          name={name}
          type="text"
          value={searchTerm}
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
