import React from 'react'
import { connect } from 'react-redux'
import { create_anecdote } from '../reducers/anecdoteReducer'
import { set_notification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {


    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.create_anecdote(content)
        notification()
    }

    const notification = () => {
        props.set_notification(`anecdote created!`, 3)
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

export default connect(
    null,
    {create_anecdote, set_notification}  
)(AnecdoteForm)