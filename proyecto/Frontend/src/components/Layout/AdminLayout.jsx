// src/components/Layout/AdminLayout.jsx
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children, userData }) => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Panel Administrativo</h1>
            <div className="flex items-center space-x-4">
              {userData && (
                <span className="text-sm text-gray-600">
                  Bienvenido, {userData.email}
                </span>
              )}
              <button 
                onClick={logout}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;