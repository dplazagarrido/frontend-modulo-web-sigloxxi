import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { Button } from '@material-ui/core';
import { insert } from '../utils/utils';


export default class ListPedidos extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            pedidos: [],
            message: null
        }
        this.refreshPedido = this.refreshPedido.bind(this)
    }

    componentDidMount()
    {
        this.refreshPedido()
    }

    parseResponse = (responseData) => responseData
        .map((response, index) => {
            const [name = '', quantity = 0, table = 0] = response
            return {
                id: index,
                name,
                quantity,
                table,
                selected: false,
            }
        })
    

    refreshPedido(){
        axios.get('http://localhost:8083/sigloxxi/pedido/cocina')
        .then(
            response => {
                console.log(response);

                this.setState({ pedidos: this.parseResponse(response.data)})
            }
        )
    }

    handleClickListo = (newPedido) => {
        const {pedidos} = this.state;
        const currentIndex = pedidos.findIndex(pedido => pedido.id === newPedido.id);
        const currentPedido = pedidos[currentIndex];
        const newCurrentPedido = {...currentPedido, selected: true}
        const newPedidos = insert(pedidos, currentIndex, newCurrentPedido)
        this.setState({
            pedidos: newPedidos,
        })
    }

    handleClickEntregable = () =>{
        this.setState({
            lineColor: 'blue',
        })
    }
    
    render(){    
        const {pedidos} = this.state;  
          
        return(
            <Paper >
            <Table aria-label="simple table">
             <TableHead>
                <TableRow>
                  <TableCell align="center">Plato</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Mesa</TableCell>
                  <TableCell>Pedido Listo</TableCell>
                  <TableCell>Pedido Entregado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pedidos.map(pedido => (
                  <TableRow key={pedido.id} selected={pedido.selected}>
                    <TableCell align="center">{pedido.name}</TableCell>
                    <TableCell>{pedido.quantity}</TableCell>
                    <TableCell>{pedido.table}</TableCell>
                    <TableCell><Button onClick={() => this.handleClickListo(pedido)}>Listo</Button></TableCell>
                    <TableCell><Button onClick={this.handleClickEntregable}>Entregado</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}