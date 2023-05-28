import React from 'react';

const Tr = ({info, handleRemove, handleEdit}) => {
    const onRemove = (item) => {
        handleRemove(item.id)
    }
    return (
        <>
            {
                info.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td><input type="checkbox"/></td>
                            <td onClick={onRemove} ><img src = {item.foodImgUrl}/></td>
                            <td>{item.foodName}</td>
                            <td><input type="checkbox"/></td>
                            <td onClick={onRemove}><img src = {item.foodImgUrl}/></td>
                            <td>{item.foodName}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Tr;