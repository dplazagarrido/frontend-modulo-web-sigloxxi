import React, { Component } from 'react'
import axios from 'axios'
import CabeceraInicio from './components/CabeceraInicio'
import ClienteForm from './components/ClienteForm'
import ListEntradas from './components/ListEntradas'
import ListFondos from "./components/ListFondos"
import ListPostres from './components/ListPostres'
import ListAgregados from './components/ListAgregados'
import ListEnsaladas from './components/ListEnsaladas'
import ListSopas from './components/ListSopas'
import ListCervezas from './components/ListCervezas'
import ListBebestibles from './components/ListBebestibles'
import ListAperitivos from './components/ListAperitivos'
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
    console.log(this.state);
    return (
      <div className="App">
       <CabeceraInicio/> 
        <ClienteForm handleSubmit={this.registrarCliente}/>
        
      </div>
    );
  }
  
}

export default App;
