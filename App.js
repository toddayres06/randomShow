import React, { useState } from 'react'


function App() {
  const [selection, setSelection] = useState('')
  const [list, setList] = useState([])
  const [randomWinner, setRandomWinner] = useState('')

console.log(list)

const handleRandom = () => {
  let randomIndex = Math.floor(Math.random() * list.length)
  console.log(list[randomIndex])
  setRandomWinner(list[randomIndex])
  setList([randomWinner])
  console.log("winner is:", list)
}

  const handleSubmit = (e) => {
    e.preventDefault()
    if(selection) {
      const listItem = { id:new Date().getTime().toString(), selection }
      setList((list) => {
        return [...list, listItem]
      })
      setSelection('')
    } else {
      console.log('values empty')
    }
    console.log(list)
  }

  return (
    <main>
      <div className="container">
        <h1 className="title">Random show roulette</h1>
        <div className="list-container">
          {list.map((item) => {
                const {id, selection} = item
                return (
                  <div key={id} className="list-border">
                    <h1>{selection}</h1>
                  </div>
                )
              })}
        </div>
        <article className="form-section">
            <form className="form" onSubmit={handleSubmit}> 
                <div className="form-control">
                    <label htmlFor="selection">Add selection: </label>
                    <input 
                    placeholder="White lotus"
                    className="inputs"
                    type="text" 
                    id="selection" 
                    name="selection" 
                    value={selection}
                    onChange={(e) => setSelection(e.target.value)}
                    />
                </div>
                <button>Toss into the box!</button>
                {/* Make new randomWinner state and set to empty string */}
                {/* when you press the button it randomly selects one value in the array as a randomWinner */}
            </form>  
            <button onClick={handleRandom}>What we watching?(www)</button>
        </article>
      </div>
    </main>
  )
}
 
            



export default App
