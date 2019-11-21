import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { CarritoContext } from '../context/CarritoHandler'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    onChangeRoute = (route) =>{
        const {changeRoute} = this.props;
        changeRoute(route);
    }
    
    render(){
        const {cantidadPlatos, url } = this.props;
        const {platos} = this.state;
        return(
            <div className="container">
                <h2>{url}</h2>
                <Paper>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" >Plato</TableCell>
                                <TableCell align="center">Descripcion</TableCell>
                                <TableCell align="center">Costo</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {platos.map(plato => (
                        <TableRow key={plato.id}>
                            <TableCell align="center">{plato.nombre}</TableCell>
                            <TableCell align="center">{plato.descripcion}</TableCell>
                            <TableCell align="center">{plato.costo}</TableCell>
                            <TableCell align="center"> 
                                <Button color="primary"
                                        onClick={()=> this.onSavePlato(plato)}
                                >
                                Agregar
                                </Button>
                            </TableCell>
                        </TableRow>   
                        ))}

                        </TableBody>
                    </Table>
                </Paper>
                <Button >Volver</Button>               
            </div>        
        )
    }
}

const withContext = props => (
<CarritoContext.Consumer>{({cantidadPlatos, agregarPlato, route, changeRoute})=> (
        <ListPlato
        {...props}
        cantidadPlatos={cantidadPlatos}
        agregarPlato={agregarPlato}
    />
)}</CarritoContext.Consumer>
)

export default withContext;