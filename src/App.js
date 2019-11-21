import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import CabeceraInicio from './components/CabeceraInicio'
import ClienteForm from './components/ClienteForm'
import ListPlato from './components/ListPlato'
import './App.css';
import ListPedidos from './components/ListPedidos'
import NumeroMesa from './components/NumeroMesa'
import { CarritoClassProvider, CarritoContext } from './context/CarritoHandler'
import Pago from './components/Pago'
import Menu from './components/Menu'
import Pedido from './components/Pedido'


class App extends Component{
  state = {
    data: [],
    ruta: 'lista',

  }


  changeRoute = (route) => {
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
        // ruta: 'lista'
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

        {/* <CarritoContext.Consumer>
            {(ruta)=>(this.changeRoute(ruta))
            }
          </CarritoContext.Consumer> */}

            <Route exact path="/"         component={ NumeroMesa } />
            <Route exact path="/cliente"  component={() => <ClienteForm handleSubmit={this.registrarCliente}/>}/>
            <Route exact path="/menu"     component={ Menu }/>
            <Route exact path="/menu1"    component={ () => <ListPlato url ='Entradas'  /> }/>
            <Route exact path="/menu1"    component={ () => <ListPlato url ='Platos de fondo'  /> }/>
            <Route exact path="/menu1"    component={ () => <ListPlato url ='Agregados'  /> }/>
            <Route exact path="/menu2"    component={ () => <ListPlato url ='Ensaladas'  /> }/>
            <Route exact path="/menu2"    component={ () => <ListPlato url ='Sopas'  /> }/>
            <Route exact path="/menu3"    component={ () => <ListPlato url ='Aperitivos'  /> }/>
            <Route exact path="/menu3"    component={ () => <ListPlato url ='Bebestibles'  /> }/>
            <Route exact path="/menu3"    component={ () => <ListPlato url ='Cervezas'  /> }/>
            <Route exact path="/menu4"    component={ () => <ListPlato url ='Postre'  /> }/>
            <Route exact path="/pedido"   component={ Pedido }/> 
            <Route exact path="/pago"     component={ Pago }/> 
            <Route exact path="/cocina"   component={ ListPedidos }/>
            {/* {ruta === 'lista' && <ListPlato url ='Platos de fondo'  />}
            {ruta === 'lista' && <ListPlato url ='Agregados'  />}
            {ruta === 'lista' && <ListPlato url ='Ensaladas'  />}
            {ruta === 'lista' && <ListPlato url ='Sopas'  />} */}

            {/* {ruta === 'usuario' && <ClienteForm handleSubmit={this.registrarCliente}/>}
           
            {ruta === 'lista' && <ListPlato url ='Platos de fondo'  />}
            {ruta === 'lista' && <ListPlato url ='Agregados'  />}
            {ruta === 'lista' && <ListPlato url ='Ensaladas'  />}
            {ruta === 'lista' && <ListPlato url ='Sopas'  />}
            {ruta === 'lista' && <ListPlato url ='Aperitivos'  />}
            {ruta === 'lista' && <ListPlato url ='Bebestibles'  />}
            {ruta === 'lista' && <ListPlato url ='Cervezas'  />}
            {ruta === 'lista' && <ListPlato url ='Postre'  />}
            {ruta === 'listas' && <ListPedidos/>}
            */}
        </CarritoClassProvider>

        
          
      </div>
    );

    
  }
  
}


export default App;
