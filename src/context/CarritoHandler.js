import React, { Component } from 'react';
import { setItem, getItem  } from '../utils/localStorage';
import { setSessionItem, getSessionItem} from '../utils/sessionStorage'

export const CarritoContext = React.createContext();

export class CarritoClassProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cantidadPlatos: 0,
        currentMesa: null,
        listaPlatos: [],
        ruta: 'mesas',
    };
  }

  componentDidMount(){
    const currentPedido = getSessionItem('CURRENT_PEDIDO');
      this.setState({
        listaPlatos: currentPedido
      })
      
      const currentTableId = getItem('CURRENT_TABLE');
      this.setState({
          currentMesa: currentTableId,
      })
      
  }

  asignarMesa = (idMesa) => {
      this.setState({currentMesa: idMesa})
      setItem('CURRENT_TABLE', idMesa)
  }


  agregarPlato = (nuevoPlato) => {
    const {listaPlatos} = this.state;
    const newListPlatos = [...listaPlatos]
    newListPlatos.push(nuevoPlato);
    this.setState(prevState => ({
        listaPlatos: newListPlatos,
        cantidadPlatos: prevState.cantidadPlatos + 1,
    }))
    setSessionItem('CURRENT_PEDIDO', listaPlatos)
}

changeRoute = (route) => {
  this.setState({
    ruta: route
  })
}

  render() {
    const { cantidadPlatos } = this.state;
    const { listaPlatos } = this.state;
    const { children } = this.props;
    console.log(this.state);
    return (
      <CarritoContext.Provider
        value={{
            listaPlatos,
            cantidadPlatos,
            agregarPlato: this.agregarPlato,
            asignarMesa: this.asignarMesa,
            changeRoute: this.changeRoute,
        }}
      >
        {children}
      </CarritoContext.Provider>
    );
  }
}