import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
    let renderedParts = course.parts.map(part =>
        <Part key={part.name} part={part} />
        )
  return (
    <div>
      {renderedParts}
    </div>
  )
}

export default Content;