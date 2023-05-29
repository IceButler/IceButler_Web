import React from 'react';

const Tr = ({ info, handleRemove, handleEdit }) => {
    const onRemove = (item) => {
      handleRemove(item.foodIdx);
    };
  
    const rows = [];
    const maxRows = 16;

    for (let i = 0; i < maxRows; i=i+2) {
      const item = info[i];
      const item2 = info[i+1];
      rows.push(
        <tr key={i}>
          {item ? (
            <>
              <td width="7%"><input type="checkbox" /></td>
              <td width="23%" onClick={() => onRemove(item)}>
                <img src={item.foodImgUrl} alt="food image" />
              </td>
              <td width="20%">{item.foodName}</td>
            </>
          ) : (
            <>
              <td width="7%"></td>
              <td width="23%"></td>
              <td width="20%"></td>
            </>
          )}
          {item2 ? (
            <>
              <td width="7%"><input type="checkbox" /></td>
              <td width="23%" onClick={() => onRemove(item2)}>
                <img src={item2.foodImgUrl} alt="food image" />
              </td>
              <td width="20%">{item2.foodName}</td>
            </>
          ) : (
            <>
              <td width="7%"></td>
              <td width="23%"></td>
              <td width="20%"></td>
            </>
          )}
        </tr>
      );
  
    }
  
    return <>{rows}</>;
  };

export default Tr;