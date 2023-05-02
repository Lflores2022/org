import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Equipo.css";

const Equipo = (props) => {
  const { titulo, colorPrimario, id} = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;

  const fondo = { backgroundColor: hexToRgba(colorPrimario, '0.5') };
  const border = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={fondo}>
        <input
          type='color'
          className= 'input-color'
          value={colorPrimario}
          onChange={(e)=> actualizarColor(e.target.value, id)}
        />
          <h3 style={border}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, i) => (
              <Colaborador 
              datos={colaborador} 
              key={i} 
              colorPrimario = {colorPrimario}
              eliminarColaborador = {eliminarColaborador}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
