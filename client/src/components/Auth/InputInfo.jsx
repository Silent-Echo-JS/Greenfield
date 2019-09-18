import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Row, Col, Button, Form, FormGroup } from 'reactstrap';


export default class Profile extends Component {

  constructor(){
    this.state = {
      userInfo: {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
      }
    }
  }

  handleChange(event) {
    const { value, name } = event.target;
    const userInfo = this.state.userInfo;
    userInfo[name] = value;
    this.setState({ userInfo });
  }


  handleClick() {
    axios.post(`/insertUserInfo`, {...this.state})
    .then((res)=> {
      
    })
    .catch((err)=> {

    })

  }

  render() {
    console.log('========props', this.props)
      return (
      <Fragment>
        <NavBar />
        <div className="bg pt-5">
          <Row className="mt-5">
            <Col
              xl={{ size: 4, offset: 7 }}
              md={{ size: 5, offset: 6 }}
              xs={{ size: 10, offset: 1 }}
              className="mt-5"
            >
              <div className="profile-head">
                <h3 className="ml-3">Profile Info</h3>
              </div>
              <div className="profile-body pt-3">
                <div className="profile-form">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Input
                        onChange={this.handleChange} type="name" name="name" placeholder="Organization Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={this.handleChange} type="address" name="address" placeholder="Address"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={this.handleChange} type="city" name="city" placeholder="City"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={this.handleChange} type="state" name="state" placeholder="State"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={this.handleChange} type="zipcode" name="zipcode" placeholder="Zipcode"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        onChange={this.handleChange} type="phone" name="phone" placeholder="Phone Number"
                      />
                    </FormGroup>

                    <Row>
                      <Col className="col-12">
                        <Button
                          onClick={this.handleClick}
                          type="submit"
                          id="login-button"
                          className="float-right mr-3 mb-3 sm-12"
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  };
}