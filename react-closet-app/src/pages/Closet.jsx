import ItemCard from '../components/ItemCard';
import NewTagForm from '../components/NewTagForm';
const Closet = () => {
  
  const closetItems = localStorage.getItem('closetItems')
  const associatedTags = localStorage.getItem('associatedTags')
  console.log("Closet:", closetItems, associatedTags)

  return (
    <div>
      <h1>Closet</h1>
      <p>Welcome, { user.name } !</p>
      <NewTagForm />
        {closetItems?.length ? closetItems.map((item, index) => (
        <ItemCard key={index} item={item} />)) 
        : <p>No items in your closet</p>
        }
    </div>
  );
};


export default Closet;