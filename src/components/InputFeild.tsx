import React, { useState } from 'react';
import './styles.css';


interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({todo , setTodo, handleAdd}: Props) => {
    
    console.log(todo);

    return (
        <form className='input'>
            <input 
                onSubmit={(e: React.FormEvent) => handleAdd}
                type= "input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} 
                placeholder='Enter a Task' 
                className='input__box' />
            <button className="input__submit">Go!!</button>
        </form>
    )
}

export default InputFeild;
