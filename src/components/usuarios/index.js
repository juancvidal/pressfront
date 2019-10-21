import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../general/Spinner';
import * as usuariosActions from '../../actions/usuariosActions';
import './index.css';
import { Link } from 'react-router-dom';

class Usuario extends Component {

    componentDidMount() {
        if(!this.props.creo_usuario){
            this.props.traerTodos();
        }       
    }

    rowSelected = (index) => {        
        this.props.usuario_to_edit(index);
    }

    showFilas = () =>
        this.props.usuarios.map((usuario, index) => (
            <tr key={usuario.id}>
                <th scope="row">
                    {index + 1}
                </th>
                <td>
                    {usuario.id}
                </td>
                <td>
                    {usuario.name}
                </td>
                <td>
                    {usuario.email}
                </td>
                <td>
                  <Link className="btn btn-primary ml-auto p-2 bd-highlight" onClick={() => {this.rowSelected(index+1)}} to='/editar'>editar</Link>
                  <Link className="btn btn-primary ml-auto p-2 bd-highlight" to='/crear'>eliminar</Link>
                </td>
            </tr>

        ));

    showTable = () => {        
        if (this.props.cargando) {
            return <Spinner />
        } else {
            return (
                <table className="table table-hover col-12">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">email</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showFilas()}
                    </tbody>
                </table>
            )
        }
    }
    render() {        
        return (
            <div className="container">
                <div className="d-flex bd-highlight mb-3">
                    <h1>Usuarios</h1>
                    {/*<button id="btn_crear" className="btn btn-primary ml-auto p-2 bd-highlight" type="button">Crear usuario</button>*/}
                    <Link id="btn_crear" className="btn btn-primary ml-auto p-2 bd-highlight" to='/crear'>Crear usuario</Link>                    
                </div>
                <div className="row">                    
                    {this.showTable()}
                </div>
            </div>

        );

    }
}

const mapToStateToProps = (reducers) => {
    return reducers.usuariosReducers;
}

export default connect(mapToStateToProps, usuariosActions)(Usuario); // Don’t forget to use export default!