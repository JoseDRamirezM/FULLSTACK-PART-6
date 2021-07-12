import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const get_anecdote_by_id = async id => {
  const response = await axios.get(baseUrl + `/${id}`)
  return response.data // the anecdote data
}

const update_anecdote = async (id, updatedAnecdote) => {
  const response = await axios.put(baseUrl + `/${id}`, updatedAnecdote)
  return response.data
}

export default { getAll, createNew, get_anecdote_by_id, update_anecdote }