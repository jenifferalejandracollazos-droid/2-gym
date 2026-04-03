import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

  let navigate = useNavigate()
  const handlerRegistro = async () => {
    // Validaciones mejoradas con mensajes específicos
    const newErrors = {};

if (!name.trim()) {
  newErrors.name = "El nombre es obligatorio";
} else if (name.trim().length < 2) {
  newErrors.name = "El nombre debe tener al menos 2 caracteres";
}

if (!email.trim()) {
  newErrors.email = "El email es obligatorio";
} else if (!email.includes("@")) {
  newErrors.email = "El email debe ser válido";
}

if (!password) {
  newErrors.password = "La contraseña es obligatoria";
} else if (password.length < 6) {
  newErrors.password = "La contraseña debe tener al menos 6 caracteres";
}

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}

setErrors({});
    const payload = {
      name: name.trim(),
      email: email.trim(),
      password,
      role
    };
    try {
      setLoading(true);
      const BACKEND = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(
        `${BACKEND}/api/create_user`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const text = await response.text();
      let data;
      try { data = JSON.parse(text); } catch { data = { message: text }; }

      console.log('Registro response status:', response.status, 'body:', data);

      if (response.ok) {
        navigate("/login");
      } else {
        setErrors({ general: data.message || "Error al crear el usuario" });
      }
    } catch (error) {
      setErrors({ general: "Error de red. Intenta de nuevo." });
    }
  };

  return (
    <section className="registro-container">
      <div className="registro-card">
        <h2 className="registro-title">Registro</h2>

        <div className="registro-group">
          <label>Nombre</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>

        <div className="registro-group">
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        <div className="registro-group">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="error-msg">{errors.password}</p>}
        </div>

        <div className="registro-group">
          <label>Tipo de usuario</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="adm">Administrador</option>
            <option value="trainer">Entrenador</option>
            <option value="client">Cliente</option>
          </select>
        </div>

        {errors.general && <p className="error-msg">{errors.general}</p>}

        <button
          className="btn-neon"
          onClick={handlerRegistro}
          disabled={loading}
        >
          {loading ? <span className="registro-spinner" /> : "Registrar"}
        </button>
      </div>
    </section>
  );
};

export default Registro;
