import React from 'react';

const Tr = ({ info, checkHandler, checkedStatusList, handleEdit }) => {
    const rows = [];
    const maxRows = 16;

    for (let i = 0; i < maxRows; i=i+2) {
      const item = info[i];
      const item2 = info[i+1];
      rows.push(
        <tr key={i}>
          {item ? (
            <>
              <td width="7%"><input type="checkbox" checked={checkedStatusList[i]} onChange={(e) => checkHandler(item.foodIdx, i)}/></td>
              <td width="23%"x>
                <img src={item.foodImgUrl} alt="food_img" />
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
              <td width="7%"><input type="checkbox" checked={checkedStatusList[i+1]} onChange={(e) => checkHandler(item.foodIdx, i+1)}/></td>
              <td width="23%">
                <img src={item2.foodImgUrl} alt="food_img" />
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