import React from 'react';
import Course from './Course';

const App = () => {
  const courses =  [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    },
    {
      name: 'Half Stack application development 2',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  ];

  let coursesToRender = courses.map(course =>
      <Course key={course.name + '_course'} course={course}/>
    )

  return (
    <div>
      {coursesToRender}
    </div>
  )
}

export default App;
