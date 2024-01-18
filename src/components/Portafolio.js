import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";

export const Portafolio = () => {
  return (
    <div className="inicio">
      <h1>
        Hola, soy Jared Marquez, este espacio es para dar a conocer mis
        proyectos realizados utilizando principalmente
        <strong> React</strong>. Dentro de mi formación académica he adquirido
        conocimientos sólidos en todo tipo de desarrollo de software.
        <br />
        <br />A lo largo de mi trayectoria academica tuve la oportunidad de
        obtener experiencia en diferentes tecnologias, como{" "}
        <strong>
          PHP, Java, MySQL, Oracle database, Power BI, Firebase, JavaScript, C#,
          React js, Dart, Flutter, Node js, CSS, HTML{" "}
        </strong>
        , entre otros.
      </h1>
       <hr/>

      <section className="last.works">
        <h2>Proyectos</h2>
        <p>
          Estos proyectos incluyendo este portafolio fue desarrollado
          fundamentalmente con React JS.
        </p>
        <div className="works"></div>
      </section>

      <section className="works">
        {trabajos.map((trabajo) => {
          console.log(trabajo.link);
          return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
              <img src={"/images/" + trabajo.id + ".png"} alt={trabajo.nombre} />
              </div>

              <h2>
                <Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
              </h2>

              <h3>{trabajo.tecnologias}</h3>
            </article>
          );
        })}
      </section>
    </div>
  );
};
