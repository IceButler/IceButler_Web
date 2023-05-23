import React from 'react';
import email from 'assets/images/email.png'

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr>
            <td>{item.email}</td>
            <td>{item.email}</td>
            <td>{item.id}</td>
            <td onClick={onRemove}><img src = {email} width="30%"/></td>
        </tr>
        </>
    )
}

export default Td;