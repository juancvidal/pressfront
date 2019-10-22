import { TRAER_TODOS, CARGANDO, ERROR, CREAR_USUARIO, USUARIO_TO_EDIT, EDITAR_USUARIO, ELIMINAR_USUARIO, SET_ULTIMO_ID } from '../types/usuariosTypes';
const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: '',
    modifico_user: false,
    edit_user: 0,
    ultimo_id: 10
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
                modifico_user: true,
                cargando: false
            }
        case SET_ULTIMO_ID:
            return {
                ...state,
                ultimo_id: action.payload                
            }
        case USUARIO_TO_EDIT:
            return {
                ...state,
                edit_user: action.payload
            }
        case EDITAR_USUARIO:
            return {
                ...state,
                usuarios: action.payload,
                modifico_user: true,
                cargando: false
            }
        case ELIMINAR_USUARIO:
            return {
                ...state,
                usuarios: action.payload,
                modifico_user: true,
                cargando: false
            }
        default: return state;
    }
}