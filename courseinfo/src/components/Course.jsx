import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'



const Course = (props) => {
    return (
        <div>
          <Header course = {props.course.name} />
          <Content parts={props.course.parts}/>
          <Footer parts={props.course.parts} />
        </div>
      )
}

export default Course