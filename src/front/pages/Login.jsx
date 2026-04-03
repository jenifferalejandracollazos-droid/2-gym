import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate();
    const [errors, setErrors] = useState ({});

  const handlerLogin = async () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!email.includes("@")) {
      newErrors.email = "El email debe ser válido";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } 
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      setLoading(true);

            const BACKEND = import.meta.env.VITE_BACKEND_URL;
            const response = await fetch(
                `${BACKEND}/api/login`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

      const data = await response.json();

            if (response.ok) {
                localStorage.setItem("access_token", data.access_token);
                dispatch({ type: "current_user", payload: data })
                
                const role = data?.user?.role || data?.role || data?.current_user?.role || null;
                const roleRouteMap = {
                    adm: "/admin",
                    trainer: "/trainer",                    
                    client: "/dashboard"
                };
                const destination = role ? (roleRouteMap[role] || "/dashboard") : "/dashboard";
                navigate(destination);
            } else {
                setErrors({ general: "Credenciales incorrectas. Verifica tu email y contraseña."});
            }

        } catch (error) {
          setErrors({ general: "Error de red. Intenta de nuevo." })
;        } finally {
            setLoading(false);
        }
    };

  return (
    <section className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <div className="login-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        <div className="login-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}
        </div>

        {errors.general && <p className="error-msg">{errors.general}</p>}

        <button
          className="btn-neon"
          onClick={handlerLogin}
          disabled={loading}
        >
          {loading ? <span className="login-spinner" /> : "Ingresar"}
        </button>
      </div>
    </section>
  );
};

export default Login;
