import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import CabeceraInicio from './components/CabeceraInicio'
import ClienteForm from './components/ClienteForm'
import ListPlato from './components/ListPlato'
import './App.css';
import ListPedidos from './components/ListPedidos'
import NumeroMesa from './components/NumeroMesa'
import { CarritoClassProvider } from './context/CarritoHandler'
import Pago from './components/Pago'


class App extends Component{
  state = {
    data: [],
    ruta: 'mesas',

  }


  changeRoute = () => {
    this.setState({
      ruta: 'usuario'
    })
  }

  registrarCliente = cliente =>{
    console.log(cliente)
    axios.post('http://localhost:8083/sigloxxi/cliente', cliente)
    .then(({ data }) => {
      const {data: currentData} = this.state;
      const newData = {...currentData, data}
      this.setState({
        data: newData,
        ruta: 'lista'
      })
    }).catch(e => {
      alert(JSON.stringify(e))
    })
  }

  render(){

    const { ruta } = this.state
    return (
      <div className="App">
        <CabeceraInicio/> 
        <CarritoClassProvider>

          {ruta === 'usuario' && <ClienteForm handleSubmit={this.registrarCliente}/>}
          {ruta === 'lista' && <ListPlato url ='Entradas'  />}
          {ruta === 'lista' && <ListPlato url ='Platos de fondo'  />}
          {ruta === 'lista' && <ListPlato url ='Agregados'  />}
          {ruta === 'lista' && <ListPlato url ='Ensaladas'  />}
          {ruta === 'lista' && <ListPlato url ='Sopas'  />}
          {ruta === 'lista' && <ListPlato url ='Aperitivos'  />}
          {ruta === 'lista' && <ListPlato url ='Bebestibles'  />}
          {ruta === 'lista' && <ListPlato url ='Cervezas'  />}
          {ruta === 'lista' && <ListPlato url ='Postre'  />}
          {ruta === 'listas' && <ListPedidos/>}
          {ruta=== 'mesas' && <NumeroMesa/>}
          {ruta === 'pago' && <Pago/>}

        </CarritoClassProvider>
      </div>
    );
  }
  
}

export default App;
