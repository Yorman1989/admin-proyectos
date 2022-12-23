import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";


const CrearCuenta = () => {

    const [usuario, setUsuario] = useState ({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, []);

    const CrearCuenta = async () => {
        const data = {
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password
        }
        const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
        console.log (response);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        CrearCuenta();
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Crear</b>Cuenta</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingrese Los Datos Del Usuario</p>
                        <form onSubmit={onSubmit}>
                        <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre" 
                                    id="nombre" 
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-at" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-key" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirmar Password"
                                    id="confirmar"
                                    name="confirmar"
                                    value={confirmar}
                                    onChange={onChange}
                                    required />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-key" />
                                    </div>
                                </div>
                            </div>
                        <div className="social-auth-links text-center mb-3">
                            <button type='submit' className="btn btn-block btn-primary">
                                Crear Cuenta
                            </button>
                            <Link to={"/"} className="btn btn-block btn-danger">
                                Regresar AL Login
                            </Link>
                        </div> 
                        </form>                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;