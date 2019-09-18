import React from "react";
import { Input } from "reactstrap";

const StaffSelect = props => {
  return (
    <Input type="select" name="select" size="sm">
      <option selected>Assign this task to...</option>
      {props.staff &&
        props.staff.map(staffMember => (
          <option>{staffMember.fullName}</option>
        ))}{" "}
    </Input>
  );
};

export default StaffSelect;
