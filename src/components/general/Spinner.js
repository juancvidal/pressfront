import React from 'react';
import './Spinner.css';
const Spinner = (props) => (
    <div className="col-12 content">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    
); 

export default Spinner;