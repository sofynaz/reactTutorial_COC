import React from 'react'
import Todo from './components/Todo'
import AddTodo from './components/addTodo'

const App = () => {
  return (
    <>
      <div className="container ml-10 text-center">
        <AddTodo />
        <Todo />
      </div>



    </>
  )
}

export default App
