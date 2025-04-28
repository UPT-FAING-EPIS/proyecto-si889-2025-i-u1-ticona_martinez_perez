// // src/components/Layout/Sidebar.jsx
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-800 text-white">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold">Menú</h2>
//       </div>
//       <nav className="mt-4">
//         <ul>
//           <li>
//             <NavLink 
//               to="/admin" 
//               className={({ isActive }) => 
//                 `block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
//               }
//             >
//               Dashboard
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/admin/diagrama" 
//               className={({ isActive }) => 
//                 `block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
//               }
//             >
//               Diagrama
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/admin/usuarios" 
//               className={({ isActive }) => 
//                 `block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
//               }
//             >
//               Usuarios
//             </NavLink>
//           </li>
//           {/* Agrega más enlaces según necesites */}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;





import { NavLink } from "react-router-dom";
import { FiHome, FiPieChart, FiUsers, FiSettings, FiLogOut, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({
    config: false,
    reports: false
  });

  const toggleItem = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen flex flex-col border-r border-gray-700">
      {/* Logo y título */}
      <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-xl font-bold">A</span>
          </div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            AdminPro
          </h2>
        </div>
      </div>

      {/* Menú principal */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-400 px-4 mb-2">Principal</h3>
          <ul>
            <li>
              <NavLink 
                to="/admin" 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-900/50 text-white border-l-4 border-indigo-500' : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                <FiHome className="mr-3" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/diagrama" 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-900/50 text-white border-l-4 border-indigo-500' : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                <FiPieChart className="mr-3" />
                <span>Diagramas</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/colaboracion" 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-900/50 text-white border-l-4 border-indigo-500' : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                <FiUsers className="mr-3" />
                <span>Colaboracion</span>
                <span className="ml-auto bg-indigo-500 text-xs px-2 py-1 rounded-full">12</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/historia" 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-900/50 text-white border-l-4 border-indigo-500' : 'text-gray-300 hover:bg-gray-800'}`
                }
              >
                <FiUsers className="mr-3" />
                <span>Historia</span>
                <span className="ml-auto bg-indigo-500 text-xs px-2 py-1 rounded-full">12</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Menú desplegable - Reportes */}
        <div className="mb-6">
          <div 
            className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer"
            onClick={() => toggleItem('reports')}
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Reportes</span>
            </div>
            {expandedItems.reports ? <FiChevronDown /> : <FiChevronRight />}
          </div>
          {expandedItems.reports && (
            <ul className="mt-1 ml-8">
              <li>
                <NavLink 
                  to="/admin/historia" 
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 rounded-lg text-sm transition-all ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`
                  }
                >
                  Ventas
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="*" 
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 rounded-lg text-sm transition-all ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`
                  }
                >
                  Actividad de usuarios
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* Configuración */}
        <div className="mb-6">
          <div 
            className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer"
            onClick={() => toggleItem('config')}
          >
            <div className="flex items-center">
              <FiSettings className="mr-3" />
              <span>Configuración</span>
            </div>
            {expandedItems.config ? <FiChevronDown /> : <FiChevronRight />}
          </div>
          {expandedItems.config && (
            <ul className="mt-1 ml-8">
              <li>
                <NavLink 
                  to="*" 
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 rounded-lg text-sm transition-all ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`
                  }
                >
                  Perfil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="*" 
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 rounded-lg text-sm transition-all ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`
                  }
                >
                  Seguridad
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="*" 
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 rounded-lg text-sm transition-all ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`
                  }
                >
                  Notificaciones
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Pie de sidebar - Perfil y logout */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-sm font-medium">AD</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-400">admin@example.com</p>
          </div>
          <button className="text-gray-400 hover:text-white">
            <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;