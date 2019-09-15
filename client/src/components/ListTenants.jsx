import React from 'react';
import { ENGINE_METHOD_DIGESTS } from 'constants';

const moreInfo = (method) => {
  const info = ``;
  window.alert(info);
};

const edit = (method) => {
  window.alert('Feature not yet available.')
}

const ListTenants = ({ method }) => {
  console.log(method, 'method');
  return (
    <tr>
    <td><p>{method.firstName}</p></td>
    <td><p>{method.lastName}</p></td>
    <td><p>{method.emContactName}</p></td>
    <td><p>{method.emContactNumber}</p></td>
    <td><p>{method.unit}</p></td>
    <td><button>More Info</button></td>
    <td><button>Edit</button></td>
    </tr>
  );
}

export default ListTenants;
