import React from "react"
import TextField from "@material-ui/core/TextField"
import propTypes from "prop-types"

import style from "./MainSection.css"

const SearchMainSection = (props) => {
  const {
    logo,
    placeholderValue,
    onChangeHandle,
    onSearchSubmit,
  } = props

  return (
    <div>
      <div className={style.logoContainer}>
        <img src={logo} />
      </div>
      <div className={style.searchFieldContainer}>
        <form onSubmit={onSearchSubmit}>
          <TextField
            id="outlined-error"
            label="Search"
            value={placeholderValue}
            onChange={onChangeHandle}
            className={style.searchField}
            name="symbol"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
    </div>
  )
}

SearchMainSection.propTypes = {
  logo: propTypes.string.isRequired,
  placeholderValue: propTypes.string.isRequired,
  onChangeHandle: propTypes.func.isRequired,
  onSearchSubmit: propTypes.func.isRequired,
}

export default SearchMainSection