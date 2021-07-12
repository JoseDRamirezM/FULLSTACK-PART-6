import React from 'react'
import { useDispatch } from 'react-redux'
import { create_anecdote } from '../reducers/anecdoteReducer'
import { set_notification, remove_notification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(create_anecdote(content))
        notification()
    }

    const notification = () => {
        dispatch(set_notification(`anecdote created!`))
        setTimeout(() => { dispatch(remove_notification()) }, 5000);
    }

    return (
        <div>
            <h2>create new</h2>    
            <form onSubmit={create}>
                <div><input name="anecdote" /></div>
                <button type="sumbit">create</button>
            </form>
        </div>
    )

}

export default AnecdoteForm