import React from "react";
import {Link} from 'react-router-dom'
import { Button } from "reactstrap";

const DBBoardTable = ({boardMembers}) => {
  // console.log('bbbbbbb', boardMembers);
  const emperor = boardMembers.find(boardmember => boardmember.position === 'Emperor');
  const president = boardMembers.find(boardmember => boardmember.position === 'President');
  const vicePresident = boardMembers.find(boardmember => boardmember.position === 'Vice President');
  const secretary = boardMembers.find(boardmember => boardmember.position === 'Secretary');
  const treasurer = boardMembers.find(boardmember => boardmember.position === 'Treasurer');
  return (
    <div className="dashboard-card p-4 mb-4" Style="height:400px width: 100%">
      <h5>HOA Board</h5>
      <hr />

      <h6>Emperor</h6>
      <p>{emperor && `${emperor.homeOwner.firstName} ${emperor.homeOwner.lastName}`}</p>
      <hr />

      <h6>President</h6>
      <p>{president && `${president.homeOwner.firstName} ${president.homeOwner.lastName}`}</p>
      <hr />

      <h6>Vice President</h6>
      <p>{vicePresident && `${vicePresident.homeOwner.firstName} ${vicePresident.homeOwner.lastName}`}</p>
      <hr />

      <h6> <b>Secretary</b></h6>
      <p>{secretary && `${secretary.homeOwner.firstName} ${secretary.homeOwner.lastName}`}</p>
      <hr />      

      <h6>Treasurer</h6>
      <p>{treasurer && `${treasurer.homeOwner.firstName} ${treasurer.homeOwner.lastName}`}</p>
      <hr />
      <hr />
      <Button tag={Link} to="/board"  size="sm">Edit Board</Button>
    </div>
  );
};

export default DBBoardTable;
