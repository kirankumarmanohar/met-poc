import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// // import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

// // async function startApp() {
// //     // Record all sessions on localhost, staging stacks and preview URLs
// //     if (!isProduction()) {
// //       // Start the Meticulous recorder before you initialise your app.
// //       // Note: all errors are caught and logged, so no need to surround with try/catch
// //       await tryLoadAndStartRecorder({
// //         projectId: 'o3Br42BVtQOLeBaXyphyQMInyESs82jgOcr9g8aS',
// //         isProduction: false,
// //       });
// //     }

// //     // Initalise app after the Meticulous recorder is ready, e.g.
// //     ReactDOM.render(component, document.getElementById('root'));
// // }

// function isProduction() {
//     // TODO: Update me with your production hostname
//     return window.location.hostname.indexOf("your-production-site.com") > -1;
// }

// startApp();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
