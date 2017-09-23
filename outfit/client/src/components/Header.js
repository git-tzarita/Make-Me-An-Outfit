import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/OutfitEdit">Edit</Link></li>
        <li><Link to="/OutfitList">List</Link></li>
        <li><Link to="/OutfitUpload">Upload</Link></li>
      </ul>
    </nav>
  </header>
  )

export default Header;
