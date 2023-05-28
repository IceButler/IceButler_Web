import React from 'react';
import email from 'assets/images/email.png'

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
                            <td onClick={onRemove} ><img src = {email}/></td>
                            <td>{item.email}</td>
                            <td><input type="checkbox"/></td>
                            <td onClick={onRemove}><img src = {email}/></td>
                            <td>{item.email}</td>
                        {/* <td>{item.id}</td> */}
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Tr;