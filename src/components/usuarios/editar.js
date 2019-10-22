import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class EditarUsuario extends Component {

    componentDidMount(){
        
    }
    update = () => {        
        let nombre = document.getElementById('name');
        let email = document.getElementById('email');
        let data = {
            "id": this.props.edit_user + 1,
            "name": nombre.value,
            "email": email.value
        }       
        this.props.editarUsuario(data, this.props.usuarios);
    }
    render() {       
        return (
            <div className="container">
                <div className="d-flex bd-highlight mb-3">                    
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder={this.props.usuarios[this.props.edit_user].email} defaultValue={this.props.usuarios[this.props.edit_user].email}/>                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" type="text" className="form-control" placeholder={this.props.usuarios[this.props.edit_user].name} defaultValue={this.props.usuarios[this.props.edit_user].name}/>
                        </div>                        
                        <Link className="btn btn-primary btn_opts" to='/' onClick={this.update}>Guardar</Link> 
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

export default connect(mapToStateToProps, usuariosActions)(EditarUsuario);