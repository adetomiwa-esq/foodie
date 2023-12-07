import { useEffect, useState } from 'react'
import TodoList from './TodoList'

function Todo() {

    const [number, setNumber] = useState(5)

    function increase(){
        setNumber((prev) => prev + 1)
    }

    useEffect(() => {
        console.log('anything')
    },[number])

    const myArray = ['sand', 'baNd', 'candle', 'blank', 'mount', 'bloom', 'brand']

    const another = myArray.filter(x => {
        return x.toLowerCase().includes('and')
    }).map(x => {
        return x + ' is the current choice'
    })

    console.log(another)
    
  return (
    <main>
        
        <button className='bg-red-500 p-2 text-4xl' onClick={increase}>+</button>
        <p className='text-3xl'>{number}</p>
        
        {
            myArray.filter(x => {
                return x.toLowerCase().includes('and')
            }).map(x => {
                return <p>{x} is the current choice</p>
            })
        }
    </main>
  )
}

export default Todo