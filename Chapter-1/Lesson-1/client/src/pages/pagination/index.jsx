import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async (page) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/users?page=${page}&limit=10`,
    );
    setUsers(data.data);
    setTotalPages(data.totalPages);
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handlePageChange = (page) => fetchUsers(page);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Paginated User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="border p-2 mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div className="flex gap-2 mt-4">
        {[...Array(totalPages).keys()].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
