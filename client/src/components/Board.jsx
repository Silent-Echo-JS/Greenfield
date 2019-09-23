import React from "react";
import axios from "axios";
import { Container, Col, Row, Table } from "reactstrap";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tenant: null,
      positions: [],
      position: null,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(selectedBoardMember) {
    console.log(selectedBoardMember);
    return axios
      .delete(`api/deleteBoardMember/${selectedBoardMember.id}/${selectedBoardMember.homeOwner.id}`)
      .then(res => {
        console.log("The board member was fired.", res.data);
        if (res.data.isDeleted) {
          this.props.getAllBoardMembers();
        }
      })
      .catch(err => console.error("The Homeowner was not removed.", err));
  }

  render() {
    console.log('BOARD PROPS', this.props);
    const { boardMembers } = this.props;
    return (
      <Container className="mt-4">
        <h1>Board</h1>
        <Row>
          <Col>
            <Table
              responsive
              hover
              color="white"
              bordered
              size="sm"
              sm={{ size: 12 }}
              md={{ size: 10, offset: 1 }}
            >
              <thead className="bg-green">
                <tr>
                  <th className="th-sm th-text">Position</th>
                  <th className="th-sm th-text">Name</th>
                  <th className="th-sm th-text">Address</th>
                  <th className="th-sm th-text">Primary Phone</th>
                  <th className="th-sm th-text">Email</th>
                  {/* <th className="th-sm th-text">Board Member</th> */}
                  <th className="th-sm th-text">Edit</th>
                  <th className="th-sm th-text">Delete</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map(boardMember => {
                  return (
                    <tr key={boardMember.homeOwner.id}>
                      <td className="td-sm td-text">{boardMember.position}</td>
                      <td className="td-sm td-text">{boardMember.homeOwner.fullName}</td>
                      <td className="td-sm td-text">{boardMember.homeOwner.address}</td>
                      <td className="td-sm td-text">{boardMember.homeOwner.phone}</td>
                      <td className="td-sm td-text">{boardMember.homeOwner.email}</td>
                      {/* <td className="td-sm td-text">Board Member</td> */}
                      <td className="td-sm td-text">Edit</td>
                      <td><button onClick={() => this.handleDelete(boardMember)}>Delete</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Board;
