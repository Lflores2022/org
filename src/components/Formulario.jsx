import { useState } from "react";
import {v4 as uuid} from 'uuid'
import CampoTexto from "./CampoTexto";
import ListaOpciones from "./ListaOpciones";
import Boton from "./Boton";
import "./Formulario.css";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [url, setUrl] = useState("");
  const [equipo, setEquipo] = useState("");

  const {registrarColaborador} = props

  const manejarEnvio = (e) => {
    e.preventDefault();
    let data = {
      id: uuid(),
      nombre,
      puesto,
      url,
      equipo,
    };
    registrarColaborador(data);
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          actualizar={setNombre}
          required
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          actualizar={setPuesto}
          required
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foton"
          valor={url}
          actualizar={setUrl}
          required
        />
        <ListaOpciones 
        valor={equipo} 
        actualizar={setEquipo} 
        equipos = {props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
