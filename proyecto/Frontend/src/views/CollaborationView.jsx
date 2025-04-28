import { useState, useEffect, useRef } from 'react';
import { FiSend, FiPaperclip, FiUserPlus, FiMic, FiVideo } from 'react-icons/fi';

const CollaborationView = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const messagesEndRef = useRef(null);

  // Sample data matching AdminPro style
  const sampleCollaborators = [
    { id: 1, name: 'María García', role: 'Editor', avatar: 'MG', online: true },
    { id: 2, name: 'Carlos López', role: 'Viewer', avatar: 'CL', online: true },
    { id: 3, name: 'Ana Martínez', role: 'Commenter', avatar: 'AM', online: false },
  ];

  const sampleMessages = [
    { id: 1, sender: 'María García', content: 'Revisemos el diagrama de clases', timestamp: '10:30 AM', avatar: 'MG' },
    { id: 2, sender: 'Tú', content: 'He actualizado la clase Payment', timestamp: '10:32 AM', avatar: 'YO', isYou: true },
    { id: 3, sender: 'Carlos López', content: 'Adjunté mis sugerencias', timestamp: '10:35 AM', avatar: 'CL', hasAttachment: true },
  ];

  useEffect(() => {
    setCollaborators(sampleCollaborators);
    setMessages(sampleMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'Tú',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'YO',
      isYou: true
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Simple Avatar component matching AdminLayout style
  const Avatar = ({ initials, size = 'sm' }) => {
    return (
      <div className={`flex items-center justify-center rounded-full bg-gray-300 w-8 h-8 text-xs text-gray-700 font-medium`}>
        {initials}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200">
      {/* Header matching AdminLayout style */}
      <div className="bg-white border-b border-gray-200 p-3 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-800">Colaboración</h2>
        <div className="flex space-x-2">
          <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600">
            <FiMic className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-100 text-gray-600">
            <FiVideo className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Collaborators Sidebar - Compact */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-700">Colaboradores</h3>
              <button className="p-1 rounded hover:bg-gray-200 text-gray-500">
                <FiUserPlus className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {collaborators.map((user) => (
              <div key={user.id} className="flex items-center p-2 hover:bg-gray-100">
                <div className="relative mr-2">
                  <Avatar initials={user.avatar} />
                  {user.online && (
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-800 truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area - Matching AdminLayout style */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isYou ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-xs ${msg.isYou ? 'flex-row-reverse' : ''}`}>
                    {!msg.isYou && (
                      <div className="mr-2">
                        <Avatar initials={msg.avatar} />
                      </div>
                    )}
                    <div>
                      <div className={`px-3 py-2 rounded-lg text-sm ${msg.isYou ? 'bg-blue-100 text-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
                        {msg.content}
                        {msg.hasAttachment && (
                          <div className="mt-1 p-1.5 bg-gray-100 rounded text-xs flex items-center">
                            <FiPaperclip className="mr-1.5" />
                            <span>archivo.pdf</span>
                          </div>
                        )}
                      </div>
                      <div className={`text-xs mt-0.5 ${msg.isYou ? 'text-right' : 'text-left'} text-gray-500`}>
                        {msg.sender} · {msg.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input - Compact */}
          <div className="bg-gray-50 border-t border-gray-200 p-3">
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe un mensaje..."
                className="w-full pl-3 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                rows="1"
              />
              <div className="absolute right-2 bottom-2 flex space-x-1">
                <button className="p-1 text-gray-500 hover:text-blue-600">
                  <FiPaperclip className="w-4 h-4" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={`p-1 ${message.trim() ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400'}`}
                >
                  <FiSend className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationView;