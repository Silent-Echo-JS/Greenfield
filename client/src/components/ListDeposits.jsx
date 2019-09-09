import React from 'react';

const ListDeposit = ({ deposit }) => {
  return (
    <li>
      <div class='listCell'>
        <div class='listItem'>
          <h4><a href=''>Edit Deposit</a></h4><br />
          <h4><a href=''>More Info</a></h4>
        </div>

        <div class='listItem'>
          <h4>Account:</h4> <p>{deposit.account}</p><br />
          <h4>Category:</h4> <p>{deposit.category}</p><br />
          <h4>Amount:</h4> <p>${deposit.amount}.{deposit.deci}</p><br />
          <h4>Date:</h4> <p>{deposit.date}</p>
        </div>
      </div>
    </li>
  );
}

export default ListDeposit;
