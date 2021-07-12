import React from 'react'
import { set_filter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
      dispatch(set_filter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter