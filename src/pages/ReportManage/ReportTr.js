import React from 'react';
import { NavLink } from 'react-router-dom';

const Tr = ({ info }) => {
    return (
        <>
            {
                info.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.recipeReportIdx}</td>
                            <td><NavLink to={'/reportManage/' + item.recipeReportIdx}>{item.recipeName}</NavLink></td>
                            <td>{item.author}</td>
                            <td>{item.reason}</td>
                            <td>{item.reporter}</td>
                            <td>{item.reportDate}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Tr;