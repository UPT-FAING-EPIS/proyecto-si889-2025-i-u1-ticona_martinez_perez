// // // // src/main.jsx
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import App from './App';
// // import Login from './components/Auth/Login';
// // import Register from './components/Auth/Register';
// // import AdminPanel from './components/Dashboard/AdminPanel';
// // import PrivateRoute from './components/Dashboard/PrivateRoute';

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<App />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
// //       </Routes>
// //     </Router>
// //   </React.StrictMode>
// // );

// // // src/main.jsx
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { AuthProvider } from './context/AuthContext';
// // import Login from './components/Auth/Login';
// // import Register from './components/Auth/Register';
// // import AdminPanel from './components/Dashboard/AdminPanel';
// // import PrivateRoute from './components/Dashboard/PrivateRoute';
// // import DiagramaView from './views/DiagramaView';
// // import App from './App';
// // import './index.css'

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <AuthProvider>
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<App />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route 
// //             path="/admin" 
// //             element={
// //               <PrivateRoute>
// //                 <AdminPanel />
// //               </PrivateRoute>
// //             } 
// //           />
// //         </Routes>
// //       </Router>
// //     </AuthProvider>
// //   </React.StrictMode>
// // );



// // src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import AdminPanel from './components/Dashboard/AdminPanel';
// import DiagramaView from './views/DiagramaView';
// import CollaborationView from './views/CollaborationView';
// import HistoryView from './views/HistoryView';
// import PrivateRoute from './components/Dashboard/PrivateRoute';
// import App from './App';
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
          
//           <Route path="/admin" element={ <PrivateRoute> <AdminPanel /> </PrivateRoute>} />
//           <Route path="/admin/diagrama" element={<PrivateRoute><DiagramaView /> </PrivateRoute>} />
//           <Route path="/admin/colaboracion" element={<PrivateRoute><CollaborationView /> </PrivateRoute>} />
//           <Route path="/admin/historia" element={<PrivateRoute><HistoryView /> </PrivateRoute>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   </React.StrictMode>
// );


// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminPanel from './components/Dashboard/AdminPanel';
import DiagramaView from './views/DiagramaView';
import CollaborationView from './views/CollaborationView';
import HistoryView from './views/HistoryView';
import PrivateRoute from './components/Dashboard/PrivateRoute';
import AdminLayout from './components/Layout/AdminLayout';
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* All admin routes wrapped with AdminLayout */}
          <Route path="/admin" element={
            <PrivateRoute>
                <AdminPanel />
            </PrivateRoute>
          } />
          
          <Route path="/admin/diagrama" element={
            <PrivateRoute>
              
                <DiagramaView />
              
            </PrivateRoute>
          } />
          
          <Route path="/admin/colaboracion" element={
            <PrivateRoute>
              <AdminLayout>
                <CollaborationView />
              </AdminLayout>
            </PrivateRoute>
          } />
          
          <Route path="/admin/historia" element={
            <PrivateRoute>
              <AdminLayout>
                <HistoryView />
              </AdminLayout>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);