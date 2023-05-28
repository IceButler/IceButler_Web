import React from 'react';
import email from 'assets/images/email.png'

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.userIdx)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr>
            <td>{item.nickname}</td>
            <td>{item.email}</td>
            <td>{item.reportCount}</td>
            <td onClick={onRemove}><img src = {email} width="30%"/></td>
        </tr>
        </>
    )
}

export default Td;