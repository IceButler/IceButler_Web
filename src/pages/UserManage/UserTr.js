import React from 'react';
import Td from './WithDrawUserManageTd';

const Tr = ({info, handleRemove, handleEdit}) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.userIdx} item={item} handleRemove={handleRemove} handleEdit={handleEdit}/>
                    )
                })
            }
        </tbody>
    )
}

export default Tr;