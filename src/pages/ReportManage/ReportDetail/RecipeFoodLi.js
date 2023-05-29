import React from 'react';
import './RecipeFoodLi.css'

const RecipeTr = ({ info }) => {
    return (
        <>
            {
                info && info.map((item, index) => {
                    return (
                        <li className='foodLi'>
                            {item.foodName} {item.foodDetail}
                        </li>
                    )
                })
            }
        </>
    )
}

export default RecipeTr;