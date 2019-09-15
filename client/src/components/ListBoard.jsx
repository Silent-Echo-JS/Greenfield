import React from 'react';
import { ENGINE_METHOD_DIGESTS } from 'constants';

const moreInfo = (method) => {
  const info = ``;
  window.alert(info);
};

const edit = (method) => {
  window.alert('Feature not yet available.')
}

const ListBoard = ({ method }) => {
  return (
    <li>
      <div class='listCell'>
        <div class='listItem'>
          <button onClick={() => edit(method)}>Edit Deposit</button><br /><br />
          <button onClick={() => moreInfo(method)}>More Info</button>
        </div>

        <div class='listItem'>
          <h4>Name:</h4> {method.name}<br />
          <h4>Position:</h4> {method.position}<br />
        </div>
      </div>
    </li>
  );
}

export default ListBoard;
