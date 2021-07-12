import anecdoteService from "../services/anecdoteService"

const anecdoteReducer = (state = [], action) => {  
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE': 
      return state.map(anecdote => anecdote.id !== action.result.id ? anecdote : action.result)
    case 'CREATE':
      const anecdoteObject = action.data
      return [...state, anecdoteObject]
    case 'INIT_ANECDOTES':
      return action.content
    default: return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      content: anecdotes
    })
    
  }
}

export const vote_anecdote = id => {
  return async dispatch => {
    const anecdote = await anecdoteService.get_anecdote_by_id(id)
    console.log('anecdote', anecdote)
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const result = await anecdoteService.update_anecdote(id, updatedAnecdote)
    dispatch({
      type: 'VOTE',
      result
    })
  }
}

export const create_anecdote = content => {
  return async dispatch => {  
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote,
    })
  }
}

export default anecdoteReducer