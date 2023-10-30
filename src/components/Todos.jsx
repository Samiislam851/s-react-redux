import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos());
    }, []);
    console.log(todos);
    return (
        <div>
            <h3>Todos</h3>
            {isLoading && <h3>...Loading</h3>}
            {error && <h3>{error}</h3>}
            <ul>
                {todos?.map(data => <li>{data.title}</li>)}
            </ul>

        </div>
    );
}

export default Todos;
