import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function ProfileCard(){
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/1.0/`)
      .then(res => {
        const profiles = res.data.results.filter(
          c =>
            c.name.first.toLowerCase().includes(query.toLowerCase()) ||
            c.name.last.toLowerCase().includes(query.toLowerCase())
        );

        console.log('profiles', profiles);

        setData(profiles);
        console.log(res.data.results, "<-res");
      })
      .catch(err => console.log(err));
  }, [query]);

  return (
    <div>
      <form>
        <label>Search...</label>
        <input
          id="chars"
          text="text"
          onChange={handleSearchChange}
          value={query}
          name="chars"
          placeholder="search by name"
        />
      </form>

      {console.log("~", data)}
      {data.map(item => (
          <>
        <div style={{border : '1px solid red', margin: '50px', display: 'flex'}}>
                      <img alt={item.name.first} src={item.picture.large} style={{borderRadius: '50%' }}/>

          <h2>{item.name.first} {item.name.last}</h2>
          <p>{item.gender}</p> {/*change to Profession */}
          <h3>Cards</h3>
          {item.id.value || 'something' }
        </div>
        <div>
            <a href="">Phone</a>
            <a href="">Email</a>
            <a href="">Globe</a>
            </div>
            </>
        
      ))}
    </div>
  );
}