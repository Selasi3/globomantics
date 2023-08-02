import './main-page.css';
import Header from './header.js';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom/cjs/react-router-dom.min';
import  FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/HouseFromQuery'
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse'
import HousesContext from '../context/houseContext';


function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);


  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
              <div className="container">
            <Header subtitle="Providing houses all over the world."/>

          <HouseFilter />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>

            <Route path="/house/:id">
              <HouseFromQuery/>
            </Route>


              <Route path="/">
                <FeaturedHouse house={featuredHouse}/>
              </Route>
          </Switch>
          </div>

    </HousesContext.Provider>
    {/* <h1>List of Houses</h1>

      {allHouses.map((house, index) => (
        <House  house = {house} />
      ))} */}
    </Router>

  );
}

export default App;
