import React, { useEffect, useRef, useState } from 'react';
import TodoItem from '../TodoItem'
import './style.css'

function Todolist({renderList, createTodo, removeTodo, editTodo}) {
    const modalbox = document.querySelector('.modal-box');
    function openModal(e) {
        modalbox.classList.add('active')
    }

    function handleCloseModal(e) {
        const button = document.querySelector('.close-modal')
        const formCreate = document.querySelector('.form-create')
        if (e.target === button || e.target === formCreate) {
            closeModal()  
            clearModal()        
        }
    }

    function closeModal() {
        modalbox.classList.remove('active')
        document.querySelector('.register__submit .submit').style.display = 'block'
        document.querySelector('.register__submit .edit').style.display = 'none'
    }

    function clearModal() {
        document.querySelector('.register__title.title input').value = null;
        document.querySelector('.register__title.description input').value = null;
        document.querySelector('.register__title.author input').value = null;  
    }

    function handleCreateTodo() {
        const title = document.querySelector('.register__title.title input').value;
        const description = document.querySelector('.register__title.description input').value;
        const author = document.querySelector('.register__title.author input').value;
        const data = {
            title,
            author,
            date: '22/08/2021',  
            description
        }
        createTodo(data)
        closeModal()
        clearModal();
    }

    function handleDataEditTodo(data) {
        openModal();
        document.querySelector('.register__title.title input').value = data.title;
        document.querySelector('.register__title.description input').value = data.description;
        document.querySelector('.register__title.author input').value = data.author; 
        // handleCreateTodo(2);
        document.querySelector('.register__submit .submit').style.display = 'none'
        document.querySelector('.register__submit .edit').style.display = 'block'
    }

    function handleEditTodo() {
        const title = document.querySelector('.register__title.title input').value;
        const description = document.querySelector('.register__title.description input').value;
        const author = document.querySelector('.register__title.author input').value;
        const id = Number.parseInt(document.querySelector('.card_id').innerText);
        const data = {
            id: id + 1,
            title,
            author,
            date: '22/08/2021',
            description,
        }
        editTodo(data);
        clearModal();
        closeModal();
    }


    console.log(renderList);

    return (
        <div className="todolist">
            <ul className="wrapper">
                {renderList.map((todo) => {
                    return <TodoItem todo = {todo} key={todo.id} removeTodo={removeTodo} editTodo={handleDataEditTodo}/>
                })}
            </ul>
            <div className="create-todo">
                <div className="createBtn" onClick={openModal}>
                    <div className="wrapBtn"></div>
                </div>
            </div>
            <div className="modal-box" onMouseDown={handleCloseModal}>
                <div className="form-create">
                    <div className="register">
                        <button className="close-modal">X</button>
                        <h2 style={{padding: '0 15px'}}>Add todo</h2>
                        <div className="register__title title">
                            <input type="text" placeholder=" "/>
                            <span>Content</span>
                        </div>
                        <div className="register__title description">
                            <input type="text" placeholder=" "/>
                            <span>Description</span>
                        </div>
                        <div className="register__title author">
                            <input type="text" placeholder=" "/>
                            <span>Author</span>
                        </div>

                        <div className="register__submit">
                            <button className="submit" onClick={handleCreateTodo}>Submit</button>
                            <button className="edit" onClick={handleEditTodo}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todolist;