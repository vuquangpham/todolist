import React, { useEffect, useRef, useState } from 'react';
import './style.css'

function TodoItem({ todo, removeTodo, editTodo }) {
    const [status, setStatus] = useState(0);
    console.log('re-render')
    useEffect(() => {
        const percentStatus = setInterval(() => {
            if (status >= 100) {
                console.log('clear') 
                clearInterval(percentStatus)
            }
            else {
                setStatus(x => x + 1)
            }

        }, 40);
        return () => {
            clearInterval(percentStatus)
        }
    }, [status])

    function handleRemoveTodo() {
        removeTodo(todo.id)
    }

    function handleEditTodo() {
        editTodo(todo);
    }
    
    return (
        <li>
            <div className="card-info">
                <div className="card-container">
                    <div className="card-top">
                        <div className="circular">
                        <div className="status">{status}%</div>
                        <div className="inner"></div>
                            <div className="circle">
                                <div className="bar left">
                                    <div className="progress"></div>
                                </div>
                                <div className="bar right">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-title">
                            <p>{todo.title}</p>
                        </div>
                        <div className="card-author">
                            <div className="card-date">{todo.date}</div>
                            <div className="card-name">
                                <p>by {todo.author}</p>
                                <p  className="card_id" style={{display: 'none'}}>{todo.id}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="card-hover" >
                    <button onClick={handleEditTodo}>Edit</button>
                    <button onClick={handleRemoveTodo}>Remove</button>
                </div>
            </div>
        </li>
    );
}

export default TodoItem;