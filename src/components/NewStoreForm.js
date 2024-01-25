import React, { useState } from "react";

const initialForm = {
  name: "",
  image: "",
  season: "",
  episode: "",
};

function NewStoreForm({ onSubmitStore }) {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(e){
    console.log(e.target.name, e.target.value)
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8085/stores", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(onSubmitStore)
    setFormData(initialForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={handleChange}
        name="name"
        placeholder="Store Name"
      />
      <input
        type="text"
        value={formData.image}
        onChange={handleChange}
        name="image"
        placeholder="Image URL"
      />
      <input
        type="number"
        value={formData.season}
        onChange={handleChange}
        name="season"
        placeholder="Season"
        step="1"
      />
      <input
        type="number"
        value={formData.episode}
        onChange={handleChange}
        name="episode"
        placeholder="Episode"
        step="1"
      />
      <button type="submit">Add Store</button>
    </form>
  );
}

export default NewStoreForm;
