import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class CrearUsuario extends Component {

    crear = () => {        
        let nombre = document.getElementById('name');
        let email = document.getElementById('email');
        let data = {
            "name": nombre.value,
            "email": email.value
        }        
        this.props.crearUsuario(data, this.props.usuarios, this.props.ultimo_id);
        
    }
    render() {       
        return (
            <div className="container">
                <div className="d-flex bd-highlight mb-3">                    
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" type="text" className="form-control" placeholder="Nombre" />
                        </div>                        
                        <Link className="btn btn-primary btn_opts" onClick={this.crear} to='/'>Guardar</Link> 
                        <Link className="btn btn-primary btn_opts" to='/'>Cancelar</Link>                       
                    </form>
                </div>                
            </div>
        );            
    }
}

const mapToStateToProps = (reducers) => {
    return reducers.usuariosReducers;
}

export default connect(mapToStateToProps, usuariosActions)(CrearUsuario);