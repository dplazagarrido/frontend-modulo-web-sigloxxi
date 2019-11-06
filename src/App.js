import React, { Component } from 'react'
import axios from 'axios'
import CabeceraInicio from './components/CabeceraInicio'
import ClienteForm from './components/ClienteForm'
import ListEntradas from './components/ListEntradas'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    data: [],
  }

  

  registrarCliente = cliente =>{
    axios.post('http://localhost:8083/sigloxxi/cliente', cliente)
    .then(({ data }) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data: newData,
      })
    })
  }

  render(){
    return (
      <div className="App">
        <CabeceraInicio/>
        <ClienteForm handleSubmit={this.registrarCliente}/>
        <ListEntradas/>
      </div>
    );
  }
  
}

export default App;
