import {React,useState} from 'react'
import Counter from './counter'

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name:'Ненужная вещь'},
        {id:1, value:0, name:'Ложка'},
        {id:2, value:0, name:'Вилка'},
        {id:3, value:0, name:'Тарелка'},
        {id:4, value:0, name:'Набор минималиста'}
    ]
    
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
      setCounters(counters.filter(counter => counter.id !== id))
    }

    const handleReset = () => {
      setCounters(initialState)
    }

    const handleIncrement = (id) => {
      const updatedCounters = [...counters]
      const currentIndex = updatedCounters.findIndex(item => item.id === id)
      updatedCounters[currentIndex].value += 1
      setCounters(updatedCounters)  
    }

    const handleDecrement = (id) => {
      const updatedCounters = [...counters]
      const currentIndex = updatedCounters.findIndex(item => item.id === id)
      updatedCounters[currentIndex].value -= 1
      setCounters(updatedCounters)  
    }

    return (
        <>
           {counters.map(counter => 
           <Counter key={counter.id} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} {...counter}/>)} 
           <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CountersList