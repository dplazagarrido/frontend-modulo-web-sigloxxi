import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Menu extends Component{
    render(){
        return(
            <div>
                <h2>Menú</h2>
                <Button href="/menu1">Entradas, Platos de Fondos y Agregados</Button>
                <Button href="/menu2">Agregados y Sopas</Button>
                <Button href="/menu3">Bebestibles</Button>
                <Button href="/menu4">Postres</Button>
                <Button href="/pedido">Pedido</Button>
            </div>
        )
    }
}