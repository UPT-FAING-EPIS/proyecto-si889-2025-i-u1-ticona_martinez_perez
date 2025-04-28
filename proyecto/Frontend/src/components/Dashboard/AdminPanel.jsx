// // src/components/Dashboard/AdminPanel.jsx
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const AdminPanel = () => {
//   const { token, logout } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/users/me", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Envía el token en el header
//           },
//         });
//         const data = await response.json();
//         setUserData(data);
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//       }
//     };

//     if (token) fetchUserData();
//   }, [token]);

//   return (
//     <div>
//       <h1>Panel Administrativo</h1>
//       {userData && <p>Bienvenido, {userData.email}</p>}
//       <button onClick={logout}>Cerrar Sesión</button>
//     </div>
//   );
// };

// export default AdminPanel;


// src/components/Dashboard/AdminPanel.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import AdminLayout from "../Layout/AdminLayout";

const AdminPanel = () => {
  const { token, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/users/login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    if (token) fetchUserData();
  }, [token]);

  return (
    <AdminLayout userData={userData}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Resumen</h2>
        {/* Aquí va el contenido principal del dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Estadística 1</h3>
            {userData && <p>Rol: {userData.role}</p>}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Estadística 2</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Estadística 3</h3>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPanel;