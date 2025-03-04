import * as React from 'react';
import TopBar from './components/TopBar';
import TableSection from './components/TableSection';
import FormSection from './components/FormSection';

function App() {

  return (
    <div className="container">
      <TopBar />
      <div className="container flex flex-row p-4">
        <TableSection />
        <FormSection />
      </div>
    </div>
  );
}

export default App;

