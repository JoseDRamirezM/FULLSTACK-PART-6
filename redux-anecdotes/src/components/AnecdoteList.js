import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote_anecdote } from '../reducers/anecdoteReducer'
import { set_notification, remove_notification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => 
        state.anecdotes.sort((a, next) => {
            return next.votes - a.votes
        })
    ).filter( anecdote => anecdote.content.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

    const dispatch = useDispatch()

    const vote = (id, content) => {
        console.log('vote', id)
        dispatch(vote_anecdote(id))
        notification(content)
        
    }

    const notification = (content) => {
        dispatch(set_notification(`you voted for ' ${content} '`, 3))
    }

    return (
        <div>            
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList