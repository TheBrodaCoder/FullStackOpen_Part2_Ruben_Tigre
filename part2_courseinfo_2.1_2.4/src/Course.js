import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';


const Course = ({ course }) => {


  return (
    <div key={course.name}>
      <Header key={course.name + '_header'} course={course} />
      <Content key={course.name + '_content'} course={course} />
      <Total key={course.name + '_total'} course={course} />
    </div>
  )
}

export default Course;