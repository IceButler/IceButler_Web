import React from 'react';
import email from 'assets/images/email.png'

const Tr = ({ info, handleRemove, handleEdit }) => {
    const onRemove = (item) => {
      handleRemove(item.foodIdx);
    };
  
    const rows = [];
    for (let i = 0; i < info.length-1; i=i+2) {
      const item = info[i];
      const item2 = info[i+1]
      rows.push(
        <tr key={i}>
          <td width="7%"><input type="checkbox"/></td>
          <td width="23%" onClick={onRemove}><img src={item.foodImgUrl}/></td>
          <td width="20%" >{item.foodName}</td>
          <td width="7%"><input type="checkbox"/></td>
          <td width="23%" onClick={onRemove}><img src={item2.foodImgUrl}/></td>
          <td width="20%">{item2.foodName}</td>
        </tr>
      );
    }
  
    return <>{rows}</>;
  };

export default Tr;