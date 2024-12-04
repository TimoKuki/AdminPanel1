import React, { useState } from 'react';
import './Dashboard.css'; // Ensure you have the new styles

const Dashboard = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Admin' },
    { id: 4, name: 'Emily White', email: 'emily.white@example.com', role: 'User' },
    { id: 5, name: 'Chris Green', email: 'chris.green@example.com', role: 'User' },
    { id: 6, name: 'Jessica Blue', email: 'jessica.blue@example.com', role: 'Admin' },
    { id: 7, name: 'David Black', email: 'david.black@example.com', role: 'User' },
    { id: 8, name: 'Sarah Red', email: 'sarah.red@example.com', role: 'Admin' },
    { id: 9, name: 'James Grey', email: 'james.grey@example.com', role: 'User' },
    { id: 10, name: 'Linda Purple', email: 'linda.purple@example.com', role: 'User' },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseForm = () => {
    setSelectedUser(null);
  };

  const handleOverlayClick = (e) => {
    // Close the form if the overlay is clicked
    if (e.target === e.currentTarget) {
      setSelectedUser(null);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>User Data Dashboard</h2>

      {/* Modal Overlay */}
      {selectedUser && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="user-form">
            <div className="form-header">
              <h3>Edit User Details</h3>
              <button onClick={handleCloseForm} className="close-btn">X</button>
            </div>
            <form>
              <div>
                <label>Name:</label>
                <input type="text" value={selectedUser.name} readOnly />
              </div>
              <div>
                <label>Email:</label>
                <input type="text" value={selectedUser.email} readOnly />
              </div>
              <div>
                <label>Role:</label>
                <input type="text" value={selectedUser.role} readOnly />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleRowClick(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
