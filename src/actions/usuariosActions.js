import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR, CREAR_USUARIO, USUARIO_TO_EDIT } from '../types/usuariosTypes';
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

export const crearUsuario = (data, usuarios) => async (dispatch) => {
    try {
        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/users/', data);
        respuesta.data.id = usuarios.length + 1;
        usuarios.push(respuesta.data);
        dispatch({
            type: CREAR_USUARIO,
            payload: usuarios
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