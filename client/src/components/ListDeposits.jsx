import React from 'react';

const ListDeposit = ({ method }) => {
  return (
    <li>
      <div class='listCell'>
        <div class='listItem'>
          <button>Edit Deposit</button><br /><br />
          <button>More Info</button>
        </div>

        <div class='listItem'>
          <h4>Account:</h4> <p>{method.account}</p><br />
          <h4>Category:</h4> <p>{method.category}</p><br />
          <h4>Amount:</h4> <p>${method.amount}.{method.deci}</p><br />
          <h4>Date:</h4> <p>{method.date}</p>
        </div>
      </div>
    </li>
  );
}

export default ListDeposit;
