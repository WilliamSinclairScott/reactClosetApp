import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { makeNewClosetItem } from '../services/api/apiInteract';

const NewItemForm = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState(null);
  const [tags, setTags] = useState([]);
  const [addTags, setAddTags] = useState([]);
  // Load associated tags from local storage
  useEffect(() => {
    const storedTags = user.associatedTags
    if (storedTags) {
      const parsed = JSON.parse(storedTags);
      const newTags = parsed.map(tag => tag.name);
      setTags(newTags);
    }
  }, [user.associatedTags]);

  // Handle checkbox change
  const handleRadioBoxAdd = (e) => {
    const selectedTag = e.target.value;
    if (tags.includes(selectedTag)) {
      //Add the tag to the list
      setAddTags([...addTags, selectedTag]);
      // Remove the tag from the list
      setTags(tags.filter(tag => tag !== selectedTag));
    } else {
      setTags([...tags, selectedTag]);
    }
  };

  const handleRadioBoxRemove = (e) => {
    const selectedTag = e.target.value;
    if (addTags.includes(selectedTag)) {
      //Add the tag to the list
      setTags([...tags, selectedTag]);
      // Remove the tag from the list
      setAddTags(addTags.filter(tag => tag !== selectedTag));
    } else {
      setAddTags([...addTags, selectedTag]);
    }
  }

  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  // Handle picture upload
  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    setPicture(URL.createObjectURL(file));
  };

  const handleSubmit =  () => {
    //filter out tags that are not checked\
    console.log(`tags associated with ${name}:`, addTags);
    const closetItem = {
      name: name,
      picture: picture,
      itemTags: addTags,
    };

    // Make API call to create a new item
    makeNewClosetItem( closetItem );
    //reset forum
    setName('');
    setPicture(null);
    setAddTags([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Item Form</h2>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Item Name" required="{true}" />
      <br />
      <input type="file" onChange={handlePictureUpload} accept="image/*" />
      {picture && <img src={picture} alt="Preview" />}
      <br />
      {  // Display radioboxes for each tag available
        tags.map((tag) => (
        <label key={tag}>
        <input type="radio" checked={false} onChange={handleRadioBoxAdd} value={tag} name="selectedTag" /> {tag}
        </label>
      ))}
      <br />
      {
        // Display radioboxes for each tag added
        addTags.map((tag) => (
        <label key={tag}>
        <input type="radio" checked={false} onChange={handleRadioBoxRemove} value={tag} name={tag} /> {tag}
        </label>
      ))}
      <br />
      <input type="submit" value="Create New Item!" />
    </form>
  );
};

export default NewItemForm;