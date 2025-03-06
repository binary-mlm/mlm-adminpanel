import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from "docx";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from "@coreui/react";

const Activeuser = () => {
  const [users, setUsers] = useState([]); // Store user data
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(ROOT_URL + `/api/admin/active-users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const downloadWord = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: "Active Users Report",
              heading: "Heading1",
              spacing: { after: 300 },
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                // Header Row
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("S/N")] }),
                    new TableCell({ children: [new Paragraph("User Name")] }),
                    new TableCell({ children: [new Paragraph("UserID")] }),
                    new TableCell({ children: [new Paragraph("Phone Number")] }),
                    new TableCell({ children: [new Paragraph("Last Order Date")] }),
                  ],
                }),
                // Data Rows
                ...users.map((user, index) =>
                  new TableRow({
                    children: [
                      new TableCell({ children: [new Paragraph((index + 1).toString())] }),
                      new TableCell({ children: [new Paragraph(user.name)] }),
                      new TableCell({ children: [new Paragraph(user.mySponsorId)] }),
                      new TableCell({ children: [new Paragraph(user.mobileNumber)] }),
                      new TableCell({ children: [new Paragraph(user.lastOrderDate || "N/A")] }),
                    ],
                  })
                ),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "ActiveUsers.docx");
      alert("Word document successfully saved!");
    });
  };

  return (
    <>
      <CButton className="btn btn-primary p-2 mt-5 text-white" onClick={downloadWord}>
        <i className="fa fa-download"></i> Download as Word
      </CButton>

      {users.length > 0 ? (
        <CTable className="mt-5">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className="text-center">S/N</CTableHeaderCell>
              <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
              <CTableHeaderCell className="text-center">UserID</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Phone Number</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Last Order Date</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users.map((user, index) => (
              <CTableRow key={user._id}>
                <CTableDataCell className="text-center">{index + 1}</CTableDataCell>
                <CTableDataCell className="text-center">{user.name}</CTableDataCell>
                <CTableDataCell className="text-center">{user.mySponsorId}</CTableDataCell>
                <CTableDataCell className="text-center">{user.mobileNumber}</CTableDataCell>
                <CTableDataCell className="text-center">{user.lastOrderDate}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      ) : (
        <div className="mt-5 text-center">
          <h5>No users found</h5>
        </div>
      )}
    </>
  );
};

export default Activeuser;
