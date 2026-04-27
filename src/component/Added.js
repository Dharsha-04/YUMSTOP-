import React, {Component, useState} from 'react'
import './Added.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Added = () => {

  const[first,setfirst] = useState("")
  const[second,setsecond] = useState("")
  const[third,setthird] = useState("")
  const[fourth,setfourth] = useState("")
  const[fifth,setfifth] = useState("")
  const nav = useNavigate()

  const senddata = async () => {

    await axios.post("https://69295cd59d311cddf349323b.mockapi.io/user", {
      first,second,third,fourth,fifth
    })
    
    // changes from create page to read page
    nav('/recipesadded')
  }

  return (
    <div>
      <div className="container">

      {/* FORM 1 */}
      <div className="recipe-form">
        <h2>Add Recipe (Basic Info)</h2>

        <label>Recipe Image</label>
        <input type="text" placeholder='Enter Image URL' value={first} onChange={e=>setfirst(e.target.value)} />

        <label>Recipe Name</label>
        <input type="text" placeholder="Eg: Cheese Burger" value={second} onChange={e=>setsecond(e.target.value)}/>

        <label>Recipe Slogan</label>
        <input type="text" placeholder="Eg: Crispy, Cheesy & Delicious" value={third} onChange={e=>setthird(e.target.value)}/>

        <label>Recipe Ingredients</label>
        <textarea placeholder="Eg: Bun, Cheese, Patty, Lettuce, Sauce" value={fourth} onChange={e=>setfourth(e.target.value)}></textarea>

        <label>Description</label>
        <textarea placeholder="Write cooking steps or description here..." value={fifth} onChange={e=>setfifth(e.target.value)}></textarea>

        <button type="submit" onClick={senddata} >Save Recipe</button>




     </div>

      </div>
    </div>
  )
}


export default Added