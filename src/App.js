import React, { Component } from 'react'
import axios from 'axios'
import CabeceraInicio from './components/CabeceraInicio'
import ClienteForm from './components/ClienteForm'
import ListPlato from './components/ListPlato'
import './App.css';
import ListPedidos from './components/ListPedidos'
import NumeroMesa from './components/NumeroMesa'
import { CarritoClassProvider } from './context/CarritoHandler'


class App extends Component{
  state = {
    data: [],
    ruta: 'listas',
  }

  changeRoute = route => {
    this.setState({
      ruta: route
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

          {ruta === 'listas' && <ListPedidos/>}

          {ruta === 'mesas' && <NumeroMesa />}
        </CarritoClassProvider>
      </div>
    );
  }
  
}

export default App;
