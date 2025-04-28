// // src/components/Auth/Login.jsx
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", email);  // ¡Importante! FastAPI espera "username" no "email"
//       formData.append("password", password);

//       const response = await fetch("http://localhost:8000/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Credenciales incorrectas");
//       }

//       const data = await response.json();
//       login(data.access_token);
//       navigate("/admin");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Iniciar Sesión</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Correo electrónico"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Ingresar</button>
//       </form>
//     </div>
//   );
// };

// export default Login;











// // src/components/Auth/Login.jsx
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { motion } from "framer-motion";
// import { FiMail, FiLock, FiAlertCircle, FiLoader } from "react-icons/fi";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", email);
//       formData.append("password", password);

//       const response = await fetch("http://localhost:8000/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Credenciales incorrectas");
//       }

//       const data = await response.json();
//       login(data.access_token);
//       navigate("/admin");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiAlertCircle, FiLoader } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { saveToken } = useContext(AuthContext);  // <-- usar saveToken, no login
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("username", email);
      formData.append("password", password);

      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Credenciales incorrectas");
      }

      const data = await response.json();
      saveToken(data.access_token);  // <-- Aquí guardamos token
      navigate("/admin");  // <-- Aquí redirigimos

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="bg-blue-600 py-8 px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Iniciar Sesión</h2>
          <p className="text-blue-100 mt-1">Ingresa a tu cuenta administrativa</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-lg"
            >
              <FiAlertCircle className="text-lg" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Correo electrónico</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition flex items-center justify-center gap-2 ${
                isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin" />
                  Procesando...
                </>
              ) : (
                "Ingresar"
              )}
            </button>
          </div>
        </form>

        <div className="px-8 pb-6 text-center">
          <p className="text-gray-500">
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;