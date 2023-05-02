import { useState } from "react";
import {v4 as uuid} from 'uuid' 
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
  }])

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
//Ternario = condicion ? seMuestra : noSeMuestra
  //Corto circuito = condicion && seMuestra
  const cambiarMostrar = () => actualizarMostrarFormulario(!mostrarFormulario);

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log('nuevo colaborador', colaborador);
    //Spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) =>{
    console.log('eliminar colaborador: ', id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    setColaboradores(nuevosColaboradores);
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(equiposActualizados)
  }
  
  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=> equipo.titulo)} 
      registrarColaborador = {registrarColaborador}
      />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}  
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App;
