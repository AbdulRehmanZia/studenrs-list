import React, { useState } from 'react';

const StudentForm = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, { name, age, className }]);
    setName('');
    setAge('');
    setClassName('');
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Student Information Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: '15px',
          }}
        >
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#555',
            }}
          >
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div
          style={{
            marginBottom: '15px',
          }}
        >
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#555',
            }}
          >
            Age:
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div
          style={{
            marginBottom: '15px',
          }}
        >
          <label
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              color: '#555',
            }}
          >
            Class:
          </label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'chocolate',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Add Student
        </button>
      </form>

      {students.length > 0 && (
        <table
          style={{
            width: '100%',
            marginTop: '30px',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '12px',
                  backgroundColor: '#f2f2f2',
                  textAlign: 'left',
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '12px',
                  backgroundColor: '#f2f2f2',
                  textAlign: 'left',
                }}
              >
                Age
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '12px',
                  backgroundColor: '#f2f2f2',
                  textAlign: 'left',
                }}
              >
                Class
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: '1px solid #ddd',
                }}
              >
                <td
                  style={{
                    padding: '8px',
                  }}
                >
                  {student.name}
                </td>
                <td
                  style={{
                    padding: '8px',
                  }}
                >
                  {student.age}
                </td>
                <td
                  style={{
                    padding: '8px',
                  }}
                >
                  {student.className}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentForm;
