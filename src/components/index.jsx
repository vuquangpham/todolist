import React, { useEffect, useState } from 'react';
import Todolist from './TodoList';
import todoApi from '../api/todoApi'

function Todo(props) {
    const [todoList, setTodoList] = useState([]);

    function handleCreateTodo(data) {
        const id = todoList.length + 1;
        const newTodo = {
            ...data,
            id
        }
            const newData = [
                ...todoList,
                newTodo
            ]
            const fetchTodoLists = async () => {
                await todoApi.add(data);
                setTodoList(newData)
            }
            fetchTodoLists()
    }

    function removeTodo(id) {
        const fetchTodoLists = async () => {
            await todoApi.remove(id);
            const newTodo = await todoApi.getAll();
            setTodoList(newTodo)
        }
        fetchTodoLists()
    }

    function handleEditTodo(data) {
        console.log(data);
        const newData = [
            ...todoList
        ]

        newData[data.id - 1] = {
            ...data
        }
        const fetchTodoLists = async () => {
            await todoApi.update(data);
            setTodoList(newData)
        }
        fetchTodoLists()
    }

    useEffect(() => {
        const fetchTodoLists = async () => {
            const todoList = await todoApi.getAll();
            setTodoList(todoList)
        }
        fetchTodoLists()
    }, [])

    return (
        <div>
            <Todolist renderList={todoList} createTodo={handleCreateTodo} removeTodo={removeTodo} editTodo={handleEditTodo}/>
        </div>
    );
}

export default Todo;