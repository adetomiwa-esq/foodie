import React from 'react'

export default function TodoList({todoList, setTodoList}) {

    function deleteThisTask(id){
        console.log(id)
        setTodoList(previousValue => previousValue.filter(task => task.id !== id))
    }
  return (
    <div>
        {
            todoList.map((x) => (
                <div className='mb-3' key={x.id}>
                    <p>{x.task}</p>
                    <button className='bg-red-700 py-1 px-2 text-white rounded-sm' onClick={() => deleteThisTask(x.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}
