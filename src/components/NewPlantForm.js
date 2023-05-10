import React, { useState } from "react";

function NewPlantForm({ plants, setPlants}) {

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")

  function handleSubmit({plants}){ 
   const updatedPlants = ([...plants, {
      name: name,
      price: price,
      image: image
    }])

    setPlants(updatedPlants)
    console.log(plants)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={(e) => setName(e.target.value)}
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={name}
        />
        <input 
        onChange={(e) => setImage(e.target.value)}
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={image}
        />
        <input 
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
