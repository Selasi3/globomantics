import { useHistory } from "react-router-dom";
import { useContext } from "react";
import HousesContext from "../context/houseContext";



const HouseFilter = () => {
  const history = useHistory();
  const allHouses = useContext(HousesContext);
  const countries = allHouses ? Array.from(new Set(allHouses.map((b) => b.country))) : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    history.push(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country
      </div>
      <div className="col-md-4 mb-3">
        <select name="" id="" className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
