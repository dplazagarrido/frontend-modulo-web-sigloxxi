import React, { Component } from 'react'
import axios from 'axios'
import { CarritoContext } from '../context/CarritoHandler'
import { Button } from '@material-ui/core'

class NumeroMesa extends Component{
    constructor(props){
        super(props)
        this.state = {
            mesa: [],
            message: null,
            numeroMesa: '',
        }
        this.refreshPedido = this.refreshPedido.bind(this)
    }

    componentDidMount()
    {
        this.refreshPedido();
    }

    refreshPedido(){
        axios.get('http://localhost:8083/sigloxxi/mesa/libres')
        .then(
            response => {
                console.log(response);
                this.setState({ mesa: response.data})
            }
        )
    }

    handleClickAsignar = id => {
        const {asignarMesa} = this.props;
        asignarMesa(id)
    }

    render(){
        console.log(this.state.numeroMesa);
        return(
            <div className="container">
                <h2>Elige la el numero de la mesa:</h2>
                    <div align='center' className='container'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mesas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.mesa.map(
                                        mesa =>
                                        <tr key={mesa.id_mesa}>
                                            <td><Button onClick={() => this.handleClickAsignar(mesa.numero)}>Mesa {mesa.numero}</Button></td>
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


const withContext = props => (
    <CarritoContext.Consumer>{({asignarMesa})=> (
            <NumeroMesa
            {...props}
            asignarMesa={asignarMesa}
        />
    )}</CarritoContext.Consumer>
    )
    
export default withContext;