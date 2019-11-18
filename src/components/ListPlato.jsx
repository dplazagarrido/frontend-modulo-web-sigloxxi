import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { CarritoContext } from '../context/CarritoHandler'

class ListPlato extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            platos: [],
            message: null
        }        
    }

    componentDidMount()
    {
        this.refreshPlato();
    }

    refreshPlato = () => {
        console.log('on Refresh')
        axios.get(('http://localhost:8083/sigloxxi/plato/categoria/').concat(this.props.url))
        .then(
            response => {
                console.log(response);
                this.setState({ platos: response.data})
            }
        )
    }

    onSavePlato = (plato) => {
        const {agregarPlato} = this.props;
        console.log(plato)
        agregarPlato(plato);
    }
    
    render(){
        const {cantidadPlatos, url } = this.props;
        const {platos} = this.state;
        return(
            <div className="container">
                <h2>{url}</h2>
                    <div className='container'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Plato</th>
                                    <th>Descripcion</th>
                                    <th>Costo</th>
                                    <th>{cantidadPlatos}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    platos.map(plato => {
                                        const {
                                            id_plato,
                                            nombre,
                                            descripcion,
                                            costo
                                        } = plato;
                                        return (
                                        <tr key={id_plato}>
                                            <td>{nombre}</td>
                                            <td>{descripcion}</td>
                                            <td>{costo}</td>
                                            <td>
                                                <Button
                                                    color="primary"
                                                    onClick={()=> this.onSavePlato(plato)}
                                                >
                                                    Agregar
                                                </Button>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

const withContext = props => (
<CarritoContext.Consumer>{({cantidadPlatos, agregarPlato})=> (
        <ListPlato
        {...props}
        cantidadPlatos={cantidadPlatos}
        agregarPlato={agregarPlato}
    />
)}</CarritoContext.Consumer>
)

export default withContext;