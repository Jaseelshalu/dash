import * as React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Roles from './pages/Roles';
import Permissions from './pages/Permissions';
import { AppSidebar } from './components/AppSidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

function App() {

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset >
          <SidebarTrigger />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </div>


  );
}

export default App;

