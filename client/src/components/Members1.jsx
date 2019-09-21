// import React, { useEffect } from "react";
// import { Table, Button, Row, Col, Container } from "reactstrap";
// import MemberModal from "./MemberModal.jsx";

// const MemberList = props => {
//   const { homeowners, getAllMembers } = props;
//   useEffect(() => {
//     getAllMembers(homeowners);
//   }, []);

//   return (
//     <Container>
//       <Row className="mt-4">
//         <Col>
//           <h1 className="mb-2">HOA Members</h1>
//           <Table
//             hover
//             color="white"
//             bordered
//             size="sm"
//             md={{ size: 10, offset: 1 }}
//           >
//             <thead className="bg-green">
//               <tr>
//                 <th className="th-sm th-text">Name</th>
//                 <th className="th-sm th-text">Address</th>
//                 <th className="th-sm th-text">Primary Phone</th>
//                 <th className="th-sm th-text">Email</th>
//                 <th className="th-sm th-text">Board Member</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {homeowners.map(homeowner => {
//                 console.log('homeowner', homeowner);
//                 return (
//                   <tr key={homeowner.id}>
//                     <td className="td-sm table-text">{homeowner.fullName}</td>
//                     <td className="td-sm table-text">{homeowner.address}</td>

//                     <td className="td-sm table-text">{homeowner.phone}</td>
//                     <td className="td-sm table-text">{homeowner.email}</td>
//                     <td className="td-sm table-text">{homeowner.isBoardMember ? 'Yes' : 'No'}</td>
//                     <td>
//                       <MemberModal homeowner={homeowner} />
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MemberList;
