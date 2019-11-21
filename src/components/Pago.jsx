import React, { Component } from 'react'
import axios from 'axios'
import { CarritoContext } from '../context/CarritoHandler'


class Pago extends Component{

    constructor(props){
        super(props)
        this.state = {
            metodoPago: [],
            metodoPagoSeleccionado: '',
            message: null,
            pedidos:{}
        }
        this.metodoPago = this.metodoPago.bind(this)
    }

    componentDidMount(){
        this.metodoPago();
    }

    metodoPago(){
        axios.get('http://localhost:8083/sigloxxi/metodoPago')
        .then(
            response => {
                console.log(response);
                this.setState({metodoPago: response.data})
            }
        )
    }

    render(){
        console.log(this.state.listaPlatos)
        return(
            <div>
                <label>Escoga un metodo de pago:</label>
                <select>
                {
                    this.state.metodoPago.map(
                    metodoPago =>   
                    <option key={metodoPago.id_metodo_pago} 
                            value={metodoPago.descripcion} 
                    >
                        {metodoPago.descripcion}
                    </option>

                                        )
                }

                </select>
            
            
            </div>
        )
    }
}

const withContext = props => (

    <CarritoContext.Consumer>{({cantidadPlatos, agregarPlato, listaPlatos})=> (
        <>   
            
            <Pago
            {...listaPlatos}
            {...props}
            cantidadPlatos={cantidadPlatos}
            agregarPlato={agregarPlato}
            
            />
        </>
    )}</CarritoContext.Consumer>

)

    
export default withContext;