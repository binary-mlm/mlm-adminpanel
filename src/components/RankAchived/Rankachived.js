import React, { useEffect, useState } from 'react';
import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow, CTableHeaderCell } from '@coreui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Rankachived = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [userRanks, setUserRanks] = useState([]);

  useEffect(() => {
    const fetchUserRanks = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/payouts/allUserRanks`);
        if (response.data.success) {
          
          setUserRanks(response.data.data);
          console.log('User ranks:', response.data.data);
        }
      } catch (error) {
        console.error('Error fetching user ranks:', error);
      }
    };

    fetchUserRanks();
  }, []);

  // const tableData = [
  //   { no: 1, rankName: "Star", vbMatching: "25,000 VB MATCHING", reward: "Udbhab T-shirt" },
  //   { no: 2, rankName: "Double Star", vbMatching: "50,000 VB MATCHING", reward: "Business tool kit" },
  //   { no: 3, rankName: "Super Star", vbMatching: "75,000 VB MATCHING", reward: "RTP" },
  //   { no: 4, rankName: "Mega Star", vbMatching: "1,00,000 VB MATCHING", reward: "Exclusive wrist watch" },
  //   { no: 5, rankName: "Udbhab Bronze Club", vbMatching: "1,50,000 VB MATCHING", reward: "Rank pin + national tour" },
  //   { no: 6, rankName: "Udbhab Silver Club", vbMatching: "3,00,000 VB MATCHING", reward: "Bronze pin + tablet" },
  //   { no: 7, rankName: "Udbhab Pearl Club", vbMatching: "6,00,000 VB MATCHING", reward: "Silver pin + laptop" },
  //   { no: 8, rankName: "Udbhab Gold Club", vbMatching: "12,00,000 VB MATCHING", reward: "Pearl pin + foreign trip" },
  //   { no: 9, rankName: "Udbhab Platinum Club", vbMatching: "30,00,000 VB MATCHING", reward: "Gold pin + Rs. 50,000 cash" },
  //   { no: 10, rankName: "Udbhab Diamond Club", vbMatching: "35,00,000 VB MATCHING", reward: "Platinum pin + Rs. 75,000 cash" },
  //   { no: 11, rankName: "Udbhab Blue Diamond Club", vbMatching: "45,00,000 VB MATCHING", reward: "Diamond pin + Rs. 1 lakh" },
  //   { no: 12, rankName: "Udbhab White Diamond Club", vbMatching: "50,00,000 VB MATCHING", reward: "Rank pin + Rs. 1.5 lakhs" },
  //   { no: 13, rankName: "Udbhab Purple Diamond Club", vbMatching: "1,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 3.5 lakhs" },
  //   { no: 14, rankName: "Udbhab Royal Diamond Club", vbMatching: "2,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 7.5 lakhs" },
  //   { no: 15, rankName: "Udbhab Crown Diamond Club", vbMatching: "5,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 10 lakhs" },
  //   { no: 16, rankName: "Udbhab Unicorn Diamond Club", vbMatching: "10,00,00,000 VB MATCHING", reward: "Rank pin + Rs. 20 lakhs" },
  // ];

  // ** Function to check if a rank has achieved users **
  const rankRewards = {
    "STAR⭐": "Udbhab T-shirt",
    "Double Star⭐⭐": "Business tool kit",
    "Super Star🌟": "RTP",
    "Mega Star✨": "Exclusive wrist watch",
    "Udbhab Bronze Club🥉": "Rank pin + national tour",
    "Udbhab Silver Club🥈": "Bronze pin + tablet",
    "Udbhab Pearl Club🦪": "Silver pin + laptop",
    "Udbhab Gold Club🥇": "Pearl pin + foreign trip",
    "Udbhab Platinum Club": "Gold pin + Rs. 50,000 cash",
    "Udbhab Diamond Club": "Platinum pin + Rs. 75,000 cash",
    "Udbhab Blue Diamond Club": "Diamond pin + Rs. 1 lakh",
    "Udbhab White Diamond Club": "Rank pin + Rs. 1.5 lakhs",
    "Udbhab Purple Diamond Club": "Rank pin + Rs. 3.5 lakhs",
    "Udbhab Royal Diamond Club": "Rank pin + Rs. 7.5 lakhs",
    "Udbhab Crown Diamond Club": "Rank pin + Rs. 10 lakhs",
    "Udbhab Unicorn Diamond Club": "Rank pin + Rs. 20 lakhs"
  };

  return (
    <>
      <div className="table-container table-responsive">
        <CTable bordered hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>S/N</CTableHeaderCell>
              <CTableHeaderCell>Rank Name</CTableHeaderCell>
             
              {Object.keys(rankRewards).length > 0 && <CTableHeaderCell>Reward</CTableHeaderCell>}
              <CTableHeaderCell>Users Achieved</CTableHeaderCell>
              
            
              <CTableHeaderCell>View</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
         
          <CTableBody>
            
          {userRanks.map((rank, index) => (
            <CTableRow key={rank._id}>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>{rank.rank}</CTableDataCell>
              <CTableDataCell>{rankRewards[rank.rank] || "-"}</CTableDataCell>
             
              <CTableDataCell>{`${rank.users.length} Achievers`}</CTableDataCell>
              <CTableDataCell>
                <Link to={`/userachieved/${rank._id}`}>
                  <i className="fa fa-eye"></i>
                </Link>
              </CTableDataCell>
            </CTableRow>
          ))}
          </CTableBody>
        </CTable>
      </div>
    </>
  );
};

export default Rankachived;
