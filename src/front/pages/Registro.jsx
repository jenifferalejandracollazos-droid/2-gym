import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

const Registro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate()
  const handlerRegistro = async () => {
    // Validaciones mejoradas con mensajes específicos
    if (!name.trim()) {
      alert("El nombre es obligatorio");
      return;
    }
    if (name.trim().length < 2) {
      alert("El nombre debe tener al menos 2 caracteres");
      return;
    }
    if (!email.trim()) {
      alert("El email es obligatorio");
      return;
    }
    if (email.trim().length < 5 || !email.includes("@")) {
      alert("El email debe ser válido");
      return;
    }
    if (!password) {
      alert("La contraseña es obligatoria");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

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
        alert("Usuario creado con éxito");
        navigate("/login");
      } else {
        alert("Error al crear usuario: " + (data.message || response.status));
      }
    } catch (error) {
      alert("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="registro-container">
      <div className="registro-card">
        <h2 className="registro-title">Registro</h2>

        <div className="registro-group">
          <label>Nombre</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="registro-group">
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="registro-group">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="registro-group">
          <label>Tipo de usuario</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="adm">Administrador</option>
            <option value="trainer">Entrenador</option>
            <option value="client">Cliente</option>
          </select>
        </div>

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
