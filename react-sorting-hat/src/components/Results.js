import React from 'react'


const Results = props => (
  <div className="results">
  
    <p> Your house is...</p>
    <h1 className="results__house">{props.chosenHouse.name}!</h1>
  </div>
)


export default Results;