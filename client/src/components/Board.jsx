import React from "react";
import axios from "axios";
import { Container, Col, Row, Table } from "reactstrap";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      tenant: null,
      positions: [],
      position: null,
      members: { data: [" "] }
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.getTenants();
  //   this.getPositions();
  //   this.getMembers();
  // }

  /*TODO: ADD VERIFICATION.*/

  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  //   this.componentDidMount();
  // }

  render() {
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
              <tr>
                <td className="td-sm td-text">Position</td>
                <td className="td-sm td-text">Name</td>
                <td className="td-sm td-text">Address</td>
                <td className="td-sm td-text">Primary Phone</td>
                <td className="td-sm td-text">Email</td>
                {/* <td className="td-sm td-text">Board Member</td> */}
                <td className="td-sm td-text">Edit</td>
                <td className="td-sm td-text">Delete</td>
              </tr>
              <tbody></tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Board;
