import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

export const TodoContainer = (props) => {
  return (
    <div>
        TodoContainer
        <TodoList></TodoList>
    </div>
  )
}

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed );
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed );
        default:
            return todos;
    }
}


const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)