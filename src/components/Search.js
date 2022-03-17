import React from 'react'
import PropTypes from "prop-types"
import pokeman from "../pokeman.json"
import Image from './Image';

function Search(){
    const [filter, filterSet ] = React.useState("");
const [selectedItem, selectedItemSet] = React.useState(null );

const PokemanRow = ({ pokeman, onSelect }) => (
<tr>
  <td>{pokeman.name.english}</td>
  <td>{pokeman.type.join(", ")}</td>
  <td>
    <button onClick={() => onSelect(pokeman)}
    >Select!</button>
  </td>
</tr>
);

PokemanRow.propTypes = {
  pokeman: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
onSelect: PropTypes.func.isRequired,
}

const PokemanInfo = ({ name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {
        Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
    </table>
  </div>
)

PokemanInfo.prototype = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired, 
  }),
  base: PropTypes.number.isRequired,
  HP: PropTypes.number.isRequired,
  Attack: PropTypes.number.isRequired,
  Defence: PropTypes.number.isRequired,
  "Sp. Attack": PropTypes.number.isRequired, 
  "Sp. Defence": PropTypes.number.isRequired, 
  speed: PropTypes.number.isRequired,
}

    return <div
    style={{
      margin:"auto",
      paddingtop: "1rem",
    }}
    >y
    <header className='header'>
      <h1 className="title"> Car Search</h1>
    <input value={filter} onChange={(evt) => 
      filterSet(evt.target.value)}/>
       <Image/>
    </header>
    
    <div style={{
      display:"grid",
      gridTemplateColumns: "60% 30%",
      gridColumnGap: "1rem",
    }} 
    >
    {/* <Image/> */}
        
    
    {/* <div> 
    <table width="100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Action</th>
      </tr>
    </thead> 
    
    
    <tbody>
      {pokeman
      .filter((pokeman) => 
      pokeman.name.english.toLowerCase().includes(filter.toLowerCase())
      )
      .slice(0,6).map(pokeman => (
        <PokemanRow pokeman={pokeman}
        key={pokeman.id} onSelect={(pokeman) => selectedItemSet(pokeman)}/>
      ))}
          
    </tbody>
    </table>
    
      </div>  */}
      {selectedItem && <PokemanInfo { ...selectedItem} />}
    </div>
    </div>
    
}

export default Search 