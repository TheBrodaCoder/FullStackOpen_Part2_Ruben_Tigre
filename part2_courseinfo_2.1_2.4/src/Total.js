import React from 'react';

const Total = ({ course }) => {
  let sum = course.parts.reduce((counter, object) => {
    return counter + object.exercises;
  }, 0);

  return(
    <p>Number of exercises {sum}</p>
  ) 
}

export default Total;