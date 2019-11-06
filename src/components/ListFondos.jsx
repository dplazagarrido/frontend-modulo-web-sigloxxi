import React, { Component } from 'react'
import axios from 'axios'
export default class ListFondos extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            plato: [],
            message: null
        }
        this.refreshPlato = this.refreshPlato.bind(this)
    }

    componentDidMount()
    {
        this.refreshPlato();
    }

    refreshPlato(){
        axios.get('http://localhost:8083/sigloxxi/plato/fondo')
        .then(
            response => {
                console.log(response);
                this.setState({ plato: response.data})
            }
        )
    }
    
    render(){
        return(
            <div className="container">
                <h2>Platos de Fondos</h2>
                    <div className='container'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Plato</th>
                                    <th>Descripcion</th>
                                    <th>Costo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.plato.map(
                                        plato =>
                                        <tr key={plato.id_plato}>
                                            <td>{plato.nombre}</td>
                                            <td>{plato.descripcion}</td>
                                            <td>{plato.costo}</td>
                                            <td><button variant="outline-primary">Agregar</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}