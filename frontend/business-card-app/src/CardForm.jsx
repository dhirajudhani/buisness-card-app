import React, { useState } from 'react';

const CardForm = ({ onAddCard }) => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    socialMedia: "",
    interests: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!formState.name || !formState.description) {
      alert("Name and Description are required");
      return;
    }
  
    const socialMediaArray = formState.socialMedia.split(',').map((item) => {
      const [platform, link] = item.split(':');
      return { 
        platform: platform ? platform.trim() : '', 
        link: link ? link.trim() : '' 
      };
    });
  
    const interestsArray = formState.interests.split(',').map((item) => item.trim());
  
    try {
      onAddCard({ ...formState, socialMedia: socialMediaArray, interests: interestsArray });
    } catch (error) {
      console.error("Error adding card:", error);
    }
  
    setFormState({
      name: '',
      description: '',
      socialMedia: '',
      interests: ''
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formState.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formState.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="socialMedia"
        placeholder="Social Media"
        value={formState.socialMedia}
        onChange={handleChange}
      />
      <input
        type="text"
        name="interests"
        placeholder="Interests"
        value={formState.interests}
        onChange={handleChange}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default CardForm;
