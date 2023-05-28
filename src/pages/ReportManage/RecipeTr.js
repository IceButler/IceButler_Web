import React from 'react';
import './RecipeTr.css'

const RecipeTr = ({ info }) => {
    return (
        <>
            {
                info.map((item, index) => {
                    return (
                        <div className='recipeItem' key={index}>
                            <p className='recipeNum'>{item.id}</p>
                            <div className='recipeDetailContent'>
                                <p>이렇게 저렇게 요렇게 죠렇게 져러케 하다보면 요리가 될 수 도 있고 아닐 수도 있고, 그냥 나는 모르겠다.</p>
                                <img className='recipeImg' src={`${process.env.PUBLIC_URL}/logo192.png`} alt='recipeImg' />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecipeTr;