import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

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
    <div key={course.name}>
      <Header key={course.name + '_header'} course={course} />
      <Content key={course.name + '_content'} course={course} />
      <Total key={course.name + '_total'} course={course} />
    </div>
    )

  return (
    <div>
      {coursesToRender}
    </div>
  )
}

export default App;
