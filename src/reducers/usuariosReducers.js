import { TRAER_TODOS, CARGANDO, ERROR, CREAR_USUARIO, USUARIO_TO_EDIT } from '../types/usuariosTypes';
const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: '',
    creo_usuario: false,
    edit_user: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {
                ...state,
                usuarios: action.payload,
                cargando: false
            }
        case CARGANDO:
            return { ...state, cargando: true }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                cargando: false
            }
        case CREAR_USUARIO:
            return {
                ...state,
                usuarios: action.payload,
                creo_usuario: true
            }
        case USUARIO_TO_EDIT:
            return {
                ...state,               
                edit_user: action.payload
            }
        default: return state;
    }
}