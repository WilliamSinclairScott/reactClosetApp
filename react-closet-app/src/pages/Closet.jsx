import ItemCard from '../components/ItemCard';
import NewTagForm from '../components/NewTagForm';
import Tag from '../components/Tag';
import NewItemForm from '../components/NewItemForm';
import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

const Closet = () => {
  const [closetItems, setClosetItems] = useState([]);
  const [associatedTags, setAssociatedTags] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      redirect('/auth'); // Redirect to login page if not logged in
    } else {
      setUsername(storedUsername);
    }

    const storedTags = localStorage.getItem('associatedTags');
    if (storedTags) {
      setAssociatedTags(JSON.parse(storedTags));
    }

    const storedClosetItems = localStorage.getItem('closetItems');
    if (storedClosetItems) {
      setClosetItems(JSON.parse(storedClosetItems));
    }
  }, []);

  return (
    <div>
      <h1>Closet</h1>
      <p>Welcome, {username}!</p>
      <NewTagForm />
      {/* <NewItemForm /> */}
      {closetItems.length ? (
        closetItems.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))
      ) : (
        <p>No items in your closet</p>
      )}

      {associatedTags.length ? (
        <div>
          <h2>Associated Tags:</h2>
            {associatedTags.map((tag,key) => (
              <Tag name={tag.name} _id={tag._id} key={key}/>
              ))}
        </div>
      ) : (
        <p>No tags associated with your items</p>
      )}
    </div>
  );
};

export default Closet;
