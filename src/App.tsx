import * as React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Roles from './pages/Roles';
import Permissions from './pages/Permissions';
import { AppSidebar } from './components/AppSidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import Authors from './pages/Authors';
import CreateAuthor from './pages/CreateAuthor';

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
            <Route path="/authors" element={<Authors />} />
            <Route path="/create-authors" element={<CreateAuthor />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </div>


  );
}

export default App;

