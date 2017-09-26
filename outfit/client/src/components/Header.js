import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => (
  <header>
    <nav>
    <h2>Make Me an Outfit</h2>
      <ul className="mainNAv">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/OutfitMake">Make New Outfit</Link></li>
        {/*<li><Link to="/OutfitEdit">Edit</Link></li>*/}
        <li><Link to="/OutfitList">List</Link></li>
        <li><Link to="/OutfitUpload">Upload</Link></li>
        <li><Link to="/auth">Login</Link></li>
      </ul>
    </nav>
  </header>
  )

export default Header;
