import { useState } from 'react';

const HistoryView = () => {
  const [activeTab, setActiveTab] = useState('versions');
  const [expandedVersion, setExpandedVersion] = useState(null);

  // Datos de ejemplo para versiones
  const versions = [
    {
      id: 'v1.3',
      date: '2023-06-15 14:30',
      user: 'María García',
      changes: 'Añadida clase PaymentProcessor',
      snapshot: `@startuml
class PaymentProcessor {
  +processPayment()
  +refundPayment()
}
@enduml`,
      comments: [
        {
          id: 'c1',
          user: 'Carlos López',
          text: '¿No deberíamos separar las responsabilidades de procesamiento y reembolso?',
          date: '2023-06-15 15:45'
        }
      ]
    },
    {
      id: 'v1.2',
      date: '2023-06-10 11:20',
      user: 'Tú',
      changes: 'Modificada relación entre User y Account',
      snapshot: `@startuml
class User {
  +String name
  +String email
}

class Account {
  +Double balance
}

User "1" -- "1" Account
@enduml`
    },
    {
      id: 'v1.1',
      date: '2023-06-05 09:15',
      user: 'Ana Martínez',
      changes: 'Versión inicial del diagrama',
      snapshot: `@startuml
class User {
  +String name
}
@enduml`
    }
  ];

  // Datos de ejemplo para actividad
  const activity = [
    {
      id: 'a1',
      type: 'comment',
      user: 'Carlos López',
      date: '2023-06-16 10:15',
      content: 'Comentó en v1.3: "¿No deberíamos separar las responsabilidades?"'
    },
    {
      id: 'a2',
      type: 'edit',
      user: 'Tú',
      date: '2023-06-15 16:30',
      content: 'Actualizaste el diagrama a v1.3'
    },
    {
      id: 'a3',
      type: 'view',
      user: 'María García',
      date: '2023-06-14 09:45',
      content: 'Revisó la versión v1.2'
    }
  ];

  const toggleVersionExpand = (versionId) => {
    setExpandedVersion(expandedVersion === versionId ? null : versionId);
  };

  const renderVersionIcon = (versionId) => {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-medium">
        {versionId.replace('v', '')}
      </div>
    );
  };

  const renderActivityIcon = (type) => {
    const icons = {
      comment: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </div>
      ),
      edit: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </div>
      ),
      view: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </div>
      )
    };
    return icons[type] || icons.view;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Historial y Versiones</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Exportar Historial
            </button>
            <button className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700">
              Restaurar Versión
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('versions')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'versions' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Versiones del Diagrama
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'activity' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Actividad Reciente
            </button>
          </nav>
        </div>

        {/* Contenido de los Tabs */}
        {activeTab === 'versions' ? (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <ul className="divide-y divide-gray-200">
              {versions.map((version) => (
                <li key={version.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      {renderVersionIcon(version.id)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="text-lg font-medium text-gray-900 truncate">{version.id} - {version.changes}</p>
                        <span className="text-sm text-gray-500">{version.date}</span>
                      </div>
                      <p className="text-sm text-gray-500">Modificado por: {version.user}</p>
                      
                      {expandedVersion === version.id && (
                        <div className="mt-4">
                          <div className="bg-gray-100 p-4 rounded-md">
                            <pre className="text-sm text-gray-800 overflow-x-auto">{version.snapshot}</pre>
                          </div>
                          
                          {version.comments && version.comments.length > 0 && (
                            <div className="mt-4">
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Comentarios:</h4>
                              {version.comments.map(comment => (
                                <div key={comment.id} className="bg-blue-50 p-3 rounded-md mb-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="font-medium text-blue-800">{comment.user}</span>
                                    <span className="text-blue-600">{comment.date}</span>
                                  </div>
                                  <p className="mt-1 text-blue-900">{comment.text}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={() => toggleVersionExpand(version.id)}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      >
                        {expandedVersion === version.id ? 'Mostrar menos' : 'Mostrar más'}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <ul className="divide-y divide-gray-200">
              {activity.map((item) => (
                <li key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      {renderActivityIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="text-lg font-medium text-gray-900">{item.user}</p>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <p className="mt-1 text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Paginación */}
        <div className="mt-6 flex justify-between items-center bg-white px-6 py-3 rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-700">
              Mostrando <span className="font-medium">1</span> a <span className="font-medium">{activeTab === 'versions' ? versions.length : activity.length}</span> de{' '}
              <span className="font-medium">{activeTab === 'versions' ? versions.length : activity.length}</span> resultados
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryView;