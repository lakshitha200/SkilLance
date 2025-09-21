import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@tailwindplus/elements';
import { UserProvider } from './context/UserProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <UserProvider>
      <App />
    </UserProvider>


)
