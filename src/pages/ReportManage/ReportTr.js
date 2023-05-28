import React from 'react';
import { NavLink } from 'react-router-dom';

const Tr = ({ info, path }) => {
    return (
        <>
            {
                info.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td width="10%">{item.recipeReportIdx}</td>
                            <td width="30%"><NavLink to={'/reportManage/' + item.recipeReportIdx}>{item.recipeName}</NavLink></td>
                            <td width="10%">{item.author}</td>
                            <td width="20%">{item.reason}</td>
                            <td width="10%">{item.reporter}</td>
                            <td width="20%">{item.reportDate}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Tr;