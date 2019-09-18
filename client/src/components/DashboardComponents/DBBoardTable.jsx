import React from "react";
import { Button } from "reactstrap";

const DBBoardTable = () => {
  return (
    <div className="dashboard-card p-4 mb-4" Style="height:400px width: 100%">
      <h5>HOA Board</h5>
      <hr />
      <h6>President</h6>
      <p>Dan Murphy</p>
      <hr />
      <h6>Vice President</h6>
      <p>Raphael Khan</p>
      <hr />
      <h6>Treasurer</h6>
      <p>Geoffrey Ian Ward</p>
      <hr />
      <h6>Secretary</h6>
      <p>Samantha De La Fuente</p>
      <hr />
      <Button size="sm">Edit Board</Button>
    </div>
  );
};

export default DBBoardTable;
