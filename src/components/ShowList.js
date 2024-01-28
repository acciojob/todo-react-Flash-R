import React from "react"



const ShowList = ({TodoList,setTodoList})=>{
    
    function deleteTodo(id){
        setTodoList(TodoList.filter(todo => todo.id != id))
    }


    return (
        <div>
            <ul>
            {
                TodoList.map(item => (
                    <li key={item.id}>
                        {item.data}
                        <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default ShowList