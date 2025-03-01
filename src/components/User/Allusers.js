import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link } from 'react-router-dom';
import {
  CFormInput,
  CFormLabel,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  
} from '@coreui/react'
const Allusers = () => {
    const [users, setUsers] = useState([]); // Store user data
  const [loading, setLoading] = useState(false); // Loading state
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [query, setQuery] = useState('');
  const [searchuserdata, setsearchuserdata] = useState([]);
  const [filterType, setFilterType] = useState(""); 
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const usersPerPage = 60
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        let apiUrl = `${ROOT_URL}/api/auth/handleAllUser`;

        // Change API URL based on the selected filter
        if (filterType === "activeWithKyc") {
          apiUrl = `${ROOT_URL}/api/admin/active-kyc-users`;
        } else if (filterType === "activeNoKyc") {
          apiUrl = `${ROOT_URL}/api/admin/active-nokyc-users`;
        } else if (filterType === "inactiveWithKyc") {
          apiUrl = `${ROOT_URL}/api/admin/inactive-kyc-users`;
        } else if (filterType === "inactiveNoKyc") {
          apiUrl = `${ROOT_URL}/api/admin/inactive-nokyc-users`;
        }

        const response = await axios.get(apiUrl);
        if (response.data.length === 0) {
          setUsers([]); // Handle empty response
        } else {
          setUsers(response.data);
        }
       
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [filterType]);

  const handleInputfieldChange = (e) => {
    setQuery(e.target.value);
};
useEffect(() => {
  const fetchuser = async () => {

    if (query.trim().length > 0) {
      setLoading(true);
      try {
        const response = await axios.get(
          `${ROOT_URL}/api/auth/searchuser?q=${query}`
        );
        setsearchuserdata(response.data.users);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setsearchuserdata([]);
    }
  };
      const debounceFetch = setTimeout(fetchuser, 300);
          return () => clearTimeout(debounceFetch);
          }, [query]);

  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const currentUsers = query
  ? searchuserdata.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
  : users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

const totalUsers = query ? searchuserdata.length : users.length;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
   
    <div className="row mx-1">
    <div className="col-md-4 col-sm-12">
    <CDropdown>
            <CDropdownToggle color="secondary">User Filter</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={() => setFilterType("activeWithKyc")}>
                Active with KYC
              </CDropdownItem>
              <CDropdownItem onClick={() => setFilterType("activeNoKyc")}>
                Active with no KYC
              </CDropdownItem>
              <CDropdownItem onClick={() => setFilterType("inactiveWithKyc")}>
                Inactive with KYC
              </CDropdownItem>
              <CDropdownItem onClick={() => setFilterType("inactiveNoKyc")}>
                Inactive with no KYC
              </CDropdownItem>
              <CDropdownItem onClick={() => setFilterType("")}>
                All Users
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
    </div>
   
    <div className="col-md-8 col-sm-12"> 
    <div className="d-flex justify-content-end">
              <CFormLabel className="mt-1" htmlFor="searchFranchise">
                Search user:
              </CFormLabel>
              <div >
                <CFormInput
                  className="ms-3"
                  id="searchFranchise"
                  value={query}
                    onChange={handleInputfieldChange}
                  
                  placeholder="Search user..."
                />
                
              </div>
              </div>
            </div>
    </div>
    {filterType && (
      <h4 style={{ marginTop: "20px", textAlign: "center", color: "#007bff" }}>
        {filterType === "activeWithKyc" && "Active Users with KYC"}
        {filterType === "activeNoKyc" && "Active Users without KYC"}
        {filterType === "inactiveWithKyc" && "Inactive Users with KYC"}
        {filterType === "inactiveNoKyc" && "Inactive Users without KYC"}
        {filterType === "" && "All Users"}
      </h4>
    )}
    {loading ? (
        <p>Loading...</p>
      ) : query && searchuserdata.length === 0 ? (
        <p>No user found</p>
      ) : (
     
        <>
        
          <UserTable users={currentUsers} />
          <Pagination
             totalPages={Math.ceil(totalUsers / usersPerPage)}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

const UserTable = ({ users }) => (
  
    <div className="table-responsive">
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        border: "1px solid #ddd",
      }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>User ID</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>phone number</th>
          {/* <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date of birth</th> */}
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Address</th>
          <th className="text-center" style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index+1}.</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.name}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.mySponsorId}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.email}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.mobileNumber}</td>
            {/* <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.dob ? new Date(user.dob).toISOString().split('T')[0] : ''}</td> */}
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.address}</td>
            <td className="text-center" style={{ border: "1px solid #ddd", padding: "8px" }}>
            <Link to={`/user/edituser/${user.mySponsorId}`} className='mt-1'><i className="fa fa-edit ms-2 mt-1"></i></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
  
  const Pagination = ({ totalPages, currentPage, paginate }) => (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            style={{
              margin: "0 5px",
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: pageNumber === currentPage ? "#007bff" : "#f8f9fa",
              color: pageNumber === currentPage ? "#fff" : "#000",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );

export default Allusers