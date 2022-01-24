import React from "react"
import data from "../yourdata"
import Card from "./atoms/Card"


const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <h1>Work</h1>
          <div className="grid">
            {data.projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
