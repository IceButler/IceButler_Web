import React from 'react';

const Tr = ({ info, handleRemove }) => {
    const onRemove = (item) => {
        handleRemove(item.id)
    }
    return (
        <>
            {
                info.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.id}</td>
                            <td onClick={onRemove(item)}>{item.id}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Tr;