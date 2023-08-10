import { useState } from 'react';
import './App.css';
import Header from './componenetes/Header/Header.js';
import Formulario from './componenetes/Formulario/Formulario';
import MiOrg from './componenetes/Miorg';
import Equipo from './componenetes/Equipo';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])

  const cambiarMostar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const equipos = [

    {
      titulo: "Programación",
      coloPrimario: "#57C278",
      colorSecundario: "#D9FE9"
    },
    {
      titulo: "Front End",
      coloPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      coloPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      coloPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "Ux y diseño",
      coloPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      coloPrimario: "#FFBA05",
      colorSecundario: "FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      coloPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

  ]

  return (
    <div>
      <Header />
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostar={cambiarMostar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        />
        )
      }

    </div>
  );
}

export default App;
