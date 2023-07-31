import './main-page.css';
import Header from './header.js';
import {useEffect, useState} from 'react';
import { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom/cjs/react-router-dom.min';
import  FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
function App() {
  const [allHouses, setAllHouses]  = useState([]);

  useEffect(() => {
    const fetchHouses = async() => {
      const resp = await fetch("/houses.json")
      const houses = await resp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const randomIndex =  Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses])


  return (
    <Router>
        <div className="container">
      <Header subtitle="Providing houses all over the world."/>
hello
    </div>
<HouseFilter allHouses={allHouses}/>
    <Switch>
      <Route path="/searchresults/:country">
        <SearchResults allHouses={allHouses}/>
      </Route>
        <Route path="/">
          <FeaturedHouse house={featuredHouse}/>
        </Route>
    </Switch>
    {/* <h1>List of Houses</h1>

      {allHouses.map((house, index) => (
        <House  house = {house} />
      ))} */}
    </Router>

  );
}

export default App;
