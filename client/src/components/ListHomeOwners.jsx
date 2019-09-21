import React from 'react';
import { ENGINE_METHOD_DIGESTS } from 'constants';

const moreInfo = (method) => {
  const info = ``;
  window.alert(info);
};

const edit = (method) => {
  window.alert('Feature not yet available.')
}

const ListHomeOwners = ({ method }) => {
  console.log(method, 'method');
  return (
    <tr>
    <td>{method.firstName}</td>
    <td>{method.lastName}</td>
    <td>{method.emContactName}</td>
    <td>{method.emContactNumber}</td>
    <td>{method.unit}</td>
    <td><button>More Info</button></td>
    <td><button>Edit</button></td>
    </tr>
  );
}

export default ListHomeOwners;
