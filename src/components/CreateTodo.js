import React,{useState} from "react";


const CreateTodo = ({TodoList,setTodoList})=>{
    const [Todo, setTodo] = useState("");



    function addTodo(){
        let lastId = TodoList[TodoList.length -1];
        let Id = lastId ? lastId.id : 0
        const obj = {
            id : Id+1,
            data: Todo
        }
        console.log(obj)
        setTodoList([...TodoList, obj])
        setTodo("")
    }

    return (
        <div>
            <div>
                <h3>To-Do List</h3>
                <input type="text" placeholder="Add Task"
                value={Todo}
                onChange={(e)=> setTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            
        </div>
    )
}

export default CreateTodo;