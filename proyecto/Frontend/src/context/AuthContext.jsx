// // src/context/AuthContext.jsx
// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   // const login = (token) => {
//   //   setToken(token);
//   //   localStorage.setItem("token", token); // Persiste el token en localStorage
//   // };
//   const login = async (email, password) => {
//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", email);    // <- Fíjate que va como "username"
//       formData.append("password", password);
  
//       const response = await fetch("http://localhost:8000/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData.toString(),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error en login: ${response.status}`);
//       }
  
//       const data = await response.json();
//       setToken(data.access_token); // Guarda el token
//       localStorage.setItem("token", data.access_token);
  
//     } catch (error) {
//       console.error("Error al iniciar sesión:", error);
//     }
//   };
  
  

//   const logout = () => {
//     setToken(null);
//     localStorage.removeItem("token"); // Elimina el token al cerrar sesión
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





// // src/context/AuthContext.jsx
// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [user, setUser] = useState(null);  // Estado adicional para datos de usuario

//   const login = async (email, password) => {
//     try {
//       const formData = new URLSearchParams();
//       formData.append("username", email);    
//       formData.append("password", password);
  
//       const response = await fetch("http://localhost:8000/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formData.toString(),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error en login: ${response.status}`);
//       }
  
//       const data = await response.json();
//       setToken(data.access_token);
//       localStorage.setItem("token", data.access_token);

//       // Opcional: obtener perfil luego de login
//       await getProfile(data.access_token);

//     } catch (error) {
//       console.error("Error al iniciar sesión:", error);
//     }
//   };

//   const getProfile = async (accessToken) => {
//     try {
//       const response = await fetch("http://localhost:8000/users/me", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error al obtener perfil: ${response.status}`);
//       }

//       const profileData = await response.json();
//       setUser(profileData); // Guarda datos del usuario
//     } catch (error) {
//       console.error("Error al obtener perfil:", error);
//     }
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// src/context/AuthContext.jsx
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  const saveToken = (accessToken) => {
    setToken(accessToken);
    localStorage.setItem("token", accessToken);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
