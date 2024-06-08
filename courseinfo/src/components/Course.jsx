import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'



const Course = (props) => {
    return (
        <div>
          {props.course.map(val => (
            <div>
              <Header course = {val.name} />
              <Content parts={val.parts}/>
              <Footer parts={val.parts} />
            </div>
          ))}
        </div>
      )
}

export default Course