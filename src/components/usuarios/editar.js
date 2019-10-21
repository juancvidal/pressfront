import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class EditarUsuario extends Component {

    componentDidMount(){
        console.log(this.props.edit_user);
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
                        <button type="button" className="btn btn-primary" onClick={this.crear}>Guardar</button> 
                        <Link className="btn btn-primary" to='/'>Cancelar</Link>                       
                    </form>
                </div>                
            </div>
        );            
    }
}

const mapToStateToProps = (reducers) => {
    return reducers.usuariosReducers;
}

export default connect(mapToStateToProps, usuariosActions)(EditarUsuario);