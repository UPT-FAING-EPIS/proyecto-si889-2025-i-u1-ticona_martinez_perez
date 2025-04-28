// // src/views/DiagramaView.jsx
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import AdminLayout from "../components/Layout/AdminLayout";

// const DiagramaView = () => {
//   const { token } = useContext(AuthContext);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/users/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
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
//     <AdminLayout userData={userData}>
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Diagrama</h2>
//         <div className="bg-white p-6 rounded-lg shadow h-96">
//           {/* Aquí iría tu componente de diagrama */}
//           <p>Contenido del diagrama irá aquí</p>
//           {userData && (
//             <p className="mt-4 text-sm text-gray-600">
//               Usuario: {userData.email}
//             </p>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default DiagramaView;





















// src/views/DiagramaView.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AdminLayout from "../components/Layout/AdminLayout";

// Datos estáticos de ejemplo (simulando la respuesta de la API)
const staticDiagrams = [
  {
    id: "1a2b3c4d-5678-90ef-1234-567890abcdef",
    name: "Diagrama de Clases Principal",
    type: "class",
    language: "python",
    owner_id: "user-123",
    created_at: "2023-05-15T10:30:00Z",
    updated_at: "2023-05-16T14:45:00Z",
    plantuml_code: "@startuml\nclass Car {\n  -String model\n  -int year\n  +startEngine()\n}\n@enduml",
    collaborators: ["user-456", "user-789"],
    elements: [
      {
        id: "elem-1",
        type: "class",
        content: "Car",
        meta: { attributes: ["-String model", "-int year"], methods: ["+startEngine()"] }
      }
    ],
    comments: [
      {
        id: "comment-1",
        author_id: "user-456",
        text: "¿Deberíamos añadir una clase Engine?",
        created_at: "2023-05-15T11:20:00Z"
      }
    ],
    versions: [
      {
        id: "version-1",
        created_at: "2023-05-15T10:30:00Z",
        snapshot: "Versión inicial del diagrama"
      }
    ]
  }
];

// Funciones estáticas que simulan la API
const DiagramService = {
  getDiagrams: async (token) => {
    console.log("Simulando llamada a API para obtener diagramas");
    await new Promise(resolve => setTimeout(resolve, 500)); // Simula delay de red
    return staticDiagrams;
  },
  
  createDiagram: async (token, diagramData) => {
    console.log("Simulando creación de diagrama:", diagramData);
    await new Promise(resolve => setTimeout(resolve, 500));
    const newDiagram = {
      ...diagramData,
      id: `new-${Math.random().toString(36).substr(2, 9)}`,
      owner_id: "current-user",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      collaborators: [],
      elements: [],
      comments: [],
      versions: []
    };
    staticDiagrams.push(newDiagram);
    return newDiagram;
  },
  
  updateDiagram: async (token, diagramId, updates) => {
    console.log("Simulando actualización de diagrama:", diagramId, updates);
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = staticDiagrams.findIndex(d => d.id === diagramId);
    if (index === -1) throw new Error("Diagrama no encontrado");
    
    const updatedDiagram = {
      ...staticDiagrams[index],
      ...updates,
      updated_at: new Date().toISOString()
    };
    staticDiagrams[index] = updatedDiagram;
    return updatedDiagram;
  },
  
  deleteDiagram: async (token, diagramId) => {
    console.log("Simulando eliminación de diagrama:", diagramId);
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = staticDiagrams.findIndex(d => d.id === diagramId);
    if (index === -1) throw new Error("Diagrama no encontrado");
    
    staticDiagrams.splice(index, 1);
    return { success: true };
  }
};

const DiagramaView = () => {
  const { token } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [diagrams, setDiagrams] = useState([]);
  const [selectedDiagram, setSelectedDiagram] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar datos del usuario y diagramas
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        // Simular carga de datos del usuario
        await new Promise(resolve => setTimeout(resolve, 300));
        setUserData({ email: "usuario@premium.com", name: "Usuario Premium" });
        
        // Cargar diagramas
        const diagramsData = await DiagramService.getDiagrams(token);
        setDiagrams(diagramsData);
        if (diagramsData.length > 0) {
          setSelectedDiagram(diagramsData[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) loadData();
  }, [token]);

  // Manejadores para las acciones CRUD
  const handleCreateDiagram = async () => {
    try {
      setIsLoading(true);
      const newDiagram = await DiagramService.createDiagram(token, {
        name: "Nuevo Diagrama",
        type: "class",
        language: "python",
        source_code: "# Código inicial"
      });
      setDiagrams([...diagrams, newDiagram]);
      setSelectedDiagram(newDiagram);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateDiagram = async (updates) => {
    if (!selectedDiagram) return;
    
    try {
      setIsLoading(true);
      const updated = await DiagramService.updateDiagram(
        token, 
        selectedDiagram.id, 
        updates
      );
      setDiagrams(diagrams.map(d => d.id === updated.id ? updated : d));
      setSelectedDiagram(updated);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteDiagram = async () => {
    if (!selectedDiagram) return;
    
    try {
      setIsLoading(true);
      await DiagramService.deleteDiagram(token, selectedDiagram.id);
      setDiagrams(diagrams.filter(d => d.id !== selectedDiagram.id));
      setSelectedDiagram(diagrams.length > 1 ? diagrams[0] : null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout userData={userData}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Diagramas UML</h2>
          <button
            onClick={handleCreateDiagram}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Diagrama
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de diagramas */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-800">Mis Diagramas</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {isLoading && diagrams.length === 0 ? (
                <div className="p-4 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : diagrams.length === 0 ? (
                <p className="p-4 text-gray-500">No hay diagramas creados</p>
              ) : (
                diagrams.map(diagram => (
                  <div 
                    key={diagram.id}
                    onClick={() => setSelectedDiagram(diagram)}
                    className={`p-4 cursor-pointer transition-colors ${selectedDiagram?.id === diagram.id ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                  >
                    <h4 className="font-medium text-gray-800">{diagram.name}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className={`px-2 py-1 rounded-full text-xs ${diagram.type === 'class' ? 'bg-blue-100 text-blue-800' : diagram.type === 'sequence' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                        {diagram.type}
                      </span>
                      <span className="ml-2">{new Date(diagram.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Editor de diagrama */}
          <div className="lg:col-span-2 space-y-6">
            {selectedDiagram ? (
              <>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">{selectedDiagram.name}</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleUpdateDiagram({ name: `${selectedDiagram.name} (editado)` })}
                        className="text-gray-600 hover:text-indigo-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                        title="Guardar"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                      </button>
                      <button 
                        onClick={handleDeleteDiagram}
                        className="text-gray-600 hover:text-red-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                        title="Eliminar"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Diagrama</label>
                      <div className="flex space-x-2">
                        {Object.entries({
                          class: "Clases",
                          sequence: "Secuencia",
                          use_case: "Casos de Uso",
                          component: "Componentes"
                        }).map(([value, label]) => (
                          <button
                            key={value}
                            onClick={() => handleUpdateDiagram({ type: value })}
                            className={`px-3 py-1 text-sm rounded-md ${selectedDiagram.type === value ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lenguaje</label>
                      <div className="flex space-x-2">
                        {['python', 'java', 'csharp', 'php'].map(lang => (
                          <button
                            key={lang}
                            onClick={() => handleUpdateDiagram({ language: lang })}
                            className={`px-3 py-1 text-sm rounded-md ${selectedDiagram.language === lang ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                          >
                            {lang.charAt(0).toUpperCase() + lang.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Código Fuente</label>
                      <textarea
                        value={selectedDiagram.source_code || ''}
                        onChange={(e) => handleUpdateDiagram({ source_code: e.target.value })}
                        className="w-full h-32 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Escribe tu código aquí..."
                      />
                    </div>
                  </div>
                </div>

                {/* Vista previa del diagrama */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-800">Vista Previa</h3>
                  </div>
                  <div className="p-6">
                    {selectedDiagram.plantuml_code ? (
                      <div className="bg-gray-100 p-4 rounded-md">
                        <pre className="text-sm text-gray-800 overflow-x-auto">
                          {selectedDiagram.plantuml_code}
                        </pre>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32 bg-gray-50 rounded-md border-2 border-dashed border-gray-300 text-gray-400">
                        <p>Genera tu diagrama para ver la vista previa</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">Selecciona o crea un diagrama</h3>
                  <p className="mt-1 text-sm text-gray-500">Empieza visualizando tus modelos UML de manera profesional.</p>
                  <div className="mt-6">
                    <button
                      onClick={handleCreateDiagram}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Nuevo Diagrama
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DiagramaView;