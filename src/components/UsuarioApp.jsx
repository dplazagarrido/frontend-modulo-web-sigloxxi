import React, { Component } from 'react'
import CabeceraInicio from './CabeceraInicio'
import ClienteForm from './ClienteForm'

/* DEBO VER LA FORMA DE DEPUES REDIRECCIONAR SOLO A ESTE COMPONENTE DESDE APP.JS*/

export default class UsuarioApp extends Component{
    render(){
        return(
            <>
            
                <CabeceraInicio/>
                <ClienteForm/>
                
            </>
        )
    }
}