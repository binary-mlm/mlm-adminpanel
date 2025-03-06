import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableRow, CTableHeaderCell, CButton } from '@coreui/react';
import axios from 'axios';

const UserAchievers = () => {
  const { rankId } = useParams();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [rankDetails, setRankDetails] = useState(null);

  useEffect(() => {
    const fetchRankDetails = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/payouts/allUserRanks`);
        if (response.data.success) {
          const rank = response.data.data.find((r) => r._id === rankId);
          setRankDetails(rank);
        }
      } catch (error) {
        console.error('Error fetching rank details:', error);
      }
    };

    fetchRankDetails();
  }, [rankId]);

  const handleClaim = async (userId) => {
    try {
      const response = await axios.put(`${ROOT_URL}/api/payouts/rankachieverstatus/${rankId}/claim/${userId}`);
      if (response.status === 200) {
        setRankDetails((prevRankDetails) => ({
          ...prevRankDetails,
          users: prevRankDetails.users.map((user) =>
            user.userId === userId ? { ...user, isclaimed: true } : user
          ),
        }));
      }
    } catch (error) {
      console.error('Error claiming reward:', error);
    }
  };

  if (!rankDetails) return <p>Loading...</p>;

  return (
    <div className="table-container table-responsive">
      <h4 className="text-center">{rankDetails.rank} Achievers</h4>

      <CTable bordered hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
            <CTableHeaderCell className="text-center">User ID</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Claim Status</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {rankDetails.users.map((user) => (
            <CTableRow key={user._id}>
              <CTableDataCell className="text-center">{user.name}</CTableDataCell>
              <CTableDataCell className="text-center">{user.userId}</CTableDataCell>
              <CTableDataCell className="text-center">
                {user.isclaimed ? "Claimed" : "Unclaimed"}
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CButton
                  color={user.isclaimed ? 'secondary' : 'info'}
                  size="md"
                  disabled={user.isclaimed}
                  onClick={() => handleClaim(user.userId)}
                >
                  {user.isclaimed ? "Claimed" : "Claim"}
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default UserAchievers;
