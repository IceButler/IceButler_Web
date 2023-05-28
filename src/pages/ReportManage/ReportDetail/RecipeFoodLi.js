import React from 'react';
import './RecipeFoodLi.css'

const RecipeTr = ({ info }) => {
    return (
        <>
            {
                info && info.map((item, index) => {
                    return (
                        <li className='foodLi' key={index}>
                            {item.foodName} {item.foodDetail}
                        </li>
                    )
                })
            }
        </>
    )
}

export default RecipeTr;