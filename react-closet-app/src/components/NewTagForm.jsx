import { useState } from 'react';
import { makeNewTag } from '../services/api/apiInteract'; // Replace 'XXX' with the appropriate module or API endpoint

const NewTagForm = () => {
  const [tagName, setTagName] = useState('');

  const handleInputChange = (event) => {
    setTagName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make API call to create a new tag
      await makeNewTag(tagName);
      // Reset the input field after successful submission
      setTagName('');
      // Optionally, you can trigger some action after successful submission
      console.log('New tag created successfully!');
    } catch (error) {
      console.error('Error creating new tag:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tagName}
        onChange={handleInputChange}
        placeholder="Enter tag name"
      />
      <button type="submit">Add Tag</button>
    </form>
  );
};

export default NewTagForm;
