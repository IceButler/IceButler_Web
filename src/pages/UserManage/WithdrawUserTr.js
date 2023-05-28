import React from 'react';
import email from 'assets/images/user/email.png'

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
                            <td width="30%">{item.nickname}</td>
                            <td width="30%">{item.email}</td>
                            <td width="20%">{item.reportCount}</td>
                            <td onClick={onRemove(item)}><img src = {email} width="20%"/></td>
                        </tr> 
                    )
                })
            }
        </>
    )
}

export default Tr;