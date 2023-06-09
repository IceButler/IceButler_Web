import React from 'react';
import { NavLink } from 'react-router-dom';

const Tr = ({ info, path }) => {
    return (
        <>
            {
                info.length > 0 ? (
                    info.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td width="10%">{item.recipeReportIdx}</td>
                                <td width="30%"><NavLink to={path + item.recipeReportIdx}>{item.recipeName}</NavLink></td>
                                <td width="10%">{item.author}</td>
                                <td width="20%">{item.reason}</td>
                                <td width="10%">{item.reporter}</td>
                                <td width="20%">{item.reportDate}</td>
                            </tr>
                        )
                    })) : (
                    <tr>
                        <td colSpan={6}>검색 결과가 없습니다.</td>
                    </tr>
                )
            }
        </>
    )
}

export default Tr;