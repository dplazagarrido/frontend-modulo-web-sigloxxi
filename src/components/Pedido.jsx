import React, { Component } from 'react'
import axios from 'axios'
import { CarritoContext } from '../context/CarritoHandler'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



export default class Pedido extends Component{

    


    render(){
        return(
            <CarritoContext.Consumer>
                {value => {
                    return(
                        <>
                        <Paper>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" >Plato</TableCell>
                                        <TableCell align="center">Costo</TableCell>
                                        <TableCell align="center">Cantidad</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {value.listaPlatos.map(plato => (
                                <TableRow key={plato.id}>
                                    <TableCell align="center">{plato.nombre}</TableCell>
                                    <TableCell align="center">{plato.costo}</TableCell>
                                    <TableCell align="center"> 1 </TableCell>
                                </TableRow>   
                                ))}

                                </TableBody>
                            </Table>
                        </Paper>
                        <Button href="/pago">Confirmar</Button> 
                        </>
                    )
                }

                }
            </CarritoContext.Consumer>
        )
    }
}