import React from 'react';
import { ENGINE_METHOD_DIGESTS } from 'constants';

const moreInfo = (method) => {
  const info = `
  account: 
  ${method.account}

  category: 
  ${method.category}

  checkNumber: 
  ${method.checkNumber}

  created: 
  ${method.created}

  date entered: 
  ${method.date}

  amount: 
  ${method.amount}

  notes: 
  ${method.notes}
  `;
  window.alert(info);
};

const edit = (method) => {
  window.alert('Feature not yet available.')
}

const ListDeposit = ({ method }) => {
  console.log(method, 'method');
  return (
    <li>
      <div class='listCell'>
        <div class='listItem'>
          <button onClick={() => edit(method)}>Edit Deposit</button><br /><br />
          <button onClick={() => moreInfo(method)}>More Info</button>
        </div>

        <div class='listItem'>
          <h4>Account:</h4> <p>{method.account}</p><br />
          <h4>Category:</h4> <p>{method.category}</p><br />
          <h4>Amount:</h4> <p>${method.amount}</p><br />
          <h4>Date:</h4> <p>{method.date}</p>
        </div>
      </div>
    </li>
  );
}

export default ListDeposit;
