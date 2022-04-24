import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>Apps I've Built</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div>
          {projects.map((project) => (
            <div>
              <a href={project.link} key={project.img}>
                <div className="flex relative">
                  <div>
                    <h1>{project.title}</h1>
                  </div>
                </div>
              </a>
              <p className="leading-relaxed">{project.description}</p>
              <img src={project.img} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
