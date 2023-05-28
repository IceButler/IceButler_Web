import React from 'react';
import email from 'assets/images/email.png'

const Tr = ({info, handleRemove, handleEdit}) => {
    const onRemove = (item) => {
        handleRemove(item.userIdx)
    }

    return (
        <>
            {
                info.map(item => {
                    return (
                        <tr key={item.userIdx}>
                            <td>{item.nickname}</td>
                            <td>{item.email}</td>
                            <td>{item.reportCount}</td>
                            <td onClick={onRemove(item)}><img src = {email} width="20%"/></td>
                        </tr> 
                    )
                })
            }
        </>
    )
}

export default Tr;