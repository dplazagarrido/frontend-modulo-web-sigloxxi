import React, { Component } from 'react';
import { setItem, getItem } from '../utils/localStorage';

export const CarritoContext = React.createContext();

export class CarritoClassProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cantidadPlatos: 100,
        currentMesa: null,
        listaPlatos: [],
    };
  }

  componentDidMount(){
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
}

  render() {
    const { cantidadPlatos } = this.state;
    const { children } = this.props;
    console.log(this.state);
    return (
      <CarritoContext.Provider
        value={{
            cantidadPlatos,
            agregarPlato: this.agregarPlato,
            asignarMesa: this.asignarMesa,
        }}
      >
        {children}
      </CarritoContext.Provider>
    );
  }
}