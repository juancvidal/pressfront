import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR, CREAR_USUARIO, USUARIO_TO_EDIT, EDITAR_USUARIO, ELIMINAR_USUARIO, SET_ULTIMO_ID } from '../types/usuariosTypes';
export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO,
    })
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const crearUsuario = (data, usuarios, ultimo_id) => async (dispatch) => {
    dispatch({
        type: CARGANDO,
    })
    try {
        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/users/', data);
        respuesta.data.id = ultimo_id + 1;
        usuarios.push(respuesta.data);
        dispatch({
            type: CREAR_USUARIO,
            payload: usuarios
        })
        dispatch({
            type: SET_ULTIMO_ID,
            payload: ultimo_id + 1
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const usuario_to_edit = (id) => async (dispatch) => {     
    dispatch({        
        type: USUARIO_TO_EDIT,
        payload: id
    })
}

export const editarUsuario = (data, usuarios) => async (dispatch) => {
    dispatch({
        type: CARGANDO,
    })
    try {
        const respuesta = await axios.put('https://jsonplaceholder.typicode.com/users/'+data.id, data);        
        usuarios[data.id -1] = respuesta.data;        
        dispatch({
            type: EDITAR_USUARIO,
            payload: usuarios
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const eliminarUsuario = (data, usuarios) => async (dispatch) => {
    dispatch({
        type: CARGANDO,
    })
    try {
        const respuesta = await axios.delete('https://jsonplaceholder.typicode.com/users/'+data.id);        
        usuarios.splice(data.id, 1);        
        dispatch({
            type: ELIMINAR_USUARIO,
            payload: usuarios
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}