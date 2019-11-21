import React, { Component } from 'react'
import { Button } from '@material-ui/core'


const validate = values => {
    const errors =  {}
    if(!values.nombre){
        errors.nombre = 'Este campo es obligatorio'
    }
    if(!values.ap_paterno){
        errors.ap_paterno = 'Este campo es obligatorio'
    }
    if(!values.ap_materno){
    errors.ap_materno = 'Este campo es obligatorio'
    }
    if(!values.nombre){
        errors.correo = 'Este campo es obligatorio'
    } 
    return errors
}

export default class ClienteForm extends Component{

    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {errors, ...sinErrors} = this.state
        const result = validate(sinErrors)
        this.setState({errors: result})
        if(!Object.keys(result).length){ 
            const {handleSubmit} = this.props
            handleSubmit(sinErrors)
            e.target.reset()

        }
    }

    render(){
        const{ errors } = this.state
        return(
            <form>
                <label>Nombre:</label>
                <input name="nombre" onChange={this.handleChange} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,64}"/>
                {errors.nombre && <p>{errors.nombre}</p>}
                <br/>
                <label>Apellido Paterno:</label>
                <input name="ap_paterno" onChange={this.handleChange} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,64}"/>
                {errors.ap_paterno && <p>{errors.ap_paterno}</p>}
                <br/>
                <label>Apellido Materno:</label>
                <input name="ap_materno"onChange={this.handleChange} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,64}"/>
                {errors.ap_materno && <p>{errors.ap_materno}</p>}
                <br/>
                <label>Email:</label>
                <input type="email" name="correo"onChange={this.handleChange} pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð@ ,.'-]{2,64}"/>
                {errors.correo && <p>{errors.correo}</p>}
                <br/>
                <Button href="/menu" onSubmit={this.handleSubmit}>Ingresar</Button>

            </form>
            
        )

        

    }
}