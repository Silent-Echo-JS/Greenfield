import React from "react";
import { Input } from "reactstrap";

const StaffSelect = props => {
  return (
    <Input
      onChange={props.handleChange}
      type="select"
      name="assignedTo"
      size="sm"
    >
      <option selected>Assign this task to...</option>
      {props.staff &&
        props.staff.map(staffMember => (
          <option name="assignedTo" hoaId={staffMember.hoaId}>
            {staffMember.fullName}
          </option>
        ))}{" "}
    </Input>
  );
};

export default StaffSelect;
