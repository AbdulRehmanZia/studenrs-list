import React from 'react';
import StudentForm from './Form';

function App() {
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '20px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ 
        color: '#333', 
        fontSize: '24px', 
        marginBottom: '20px' 
      }}>
        Student Information Form
      </h1>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
        <StudentForm />
      </div>
    </div>
  );
}

export default App;
