import React from "react";

export const Curriculum = () => {
  return (
    <div className="curriculum">
      <section className="perfil">
        <h2>PERFIL PROFESIONAL</h2>
        <p>
          Graduado en Ingeniería en Software con un fuerte deseo de aprender y
          crecer en el campo de la tecnología. A lo largo de mi formación
          académica he adquirido conocimientos sólidos en el desarrollo de
          software participando en proyectos académicos y poniendo en práctica
          mis habilidades durante los procesos de estancias y estadía
          profesional.
        </p>
      </section>

      <hr />

      <section className="formacion">
        <h2>FORMACION ACADEMICA</h2>
        <p className="licenciatura"><strong>Licenciatura en ingeniería en software</strong></p>

        <p className="universidad">Universidad Politécnica de Durango | Abril 2020 - Diciembre 2023</p>
      </section>

      <hr />

      <section className="experiencia">
        <h2>EXPERIENCIA</h2>
        <section>
          <h3>Pasante</h3>
          <p className="lugar">Dad software | Septiembre 2023 - Diciembre 2023</p>
          <p>
            Dentro de la empresa, me desempeñé analizando y tratando bases de
            datos soportadas en SQL Server, para la creación de dashboards
            interactivos, donde posteriormente se llevo a cabo su incrustación
            en una aplicación basada en C#, utilizando como herramienta
            principal Power BI.
          </p>
        </section>

        <section>
          <h3>Desarrollador web full stack</h3>
          <p className="lugar">Floreria Rosita | Enero 2022 - Abril 2022</p>
          <p>
            Tuve la oportunidad de desarrollar un sitio web completo incluyendo
            una sección de administración para una microempresa, utilizando como
            herramientas principales PHP, JavaScript, CSS, HTML y MySQL.
          </p>
        </section>
      </section>

      <hr />

      <section className="footCurri">
        <section className="idiomaAptitud">
          <section>
            <section>
              <h2>IDIOMAS</h2>
              <ul>
                <li>Ingles B1</li>
              </ul>
            </section>
          </section>

          <section>
            <h2>APTITUDES</h2>
            <ul>
              <li>Comunicación asertiva</li>
              <li>Resolución de problemas</li>
              <li>Trabajo en equipo</li>
              <li>Organización</li>
              <li>Rápido aprendizaje</li>
            </ul>
          </section>
        </section>

        <section className="software">
          <h2>SOFTWARE</h2>
          <p>Experiencia en el uso de:</p>
          <ul>
            <li>C#</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Dart</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Oracle Database</li>
            <li>SQL Server</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>Entre otros</li>
          </ul>
        </section>

        <section className="certificados">
          <h2>CERTIFICADOS</h2>
          <h3>Oracle Academy</h3>
          <ul>
            <li>Database Programing with SQL | Nov 2022</li>
            <li>Database Design | Nov 2022</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
