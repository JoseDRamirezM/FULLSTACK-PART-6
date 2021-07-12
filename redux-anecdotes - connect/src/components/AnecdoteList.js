import React from 'react'
import { connect } from 'react-redux'
import { vote_anecdote } from '../reducers/anecdoteReducer'
import { set_notification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  
    const filter = () => props.filter
    const anecdotes = () => (
        props.anecdotes.sort((a, next) => {
            return next.votes - a.votes
        }).filter( anecdote => anecdote.content.toLocaleLowerCase().includes(filter().toLocaleLowerCase()))
    )

    const vote = (id, content) => {
        console.log('vote', id)
        props.vote_anecdote(id)
        notification(content)
        
    }

    const notification = (content) => {
        props.set_notification(`you voted for ' ${content} '`, 3)
    }

    return (
        <div>            
            {anecdotes().map(anecdote =>
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
const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    vote_anecdote,
    set_notification,
}

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes