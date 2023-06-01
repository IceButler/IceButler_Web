import React from 'react';
import './RecipeTr.css'

const RecipeTr = ({ info }) => {
    return (
        <>
            {
                info && info.map((item, index) => {
                    return (
                        <div className='recipeItem' key={index}>
                            <p className='recipeNum'>{item.nextIdx + 1}</p>
                            <div className='recipeDetailContent' key={"recipe" + item.nextIdx}>
                                {item.cookeryImgUrl ? (
                                    <>
                                        <p>{item.description}</p>
                                        <img className='recipeImg' src={item.cookeryImgUrl} alt='recipeImg' />
                                    </>
                                ) : (
                                    <p style={{ marginRight: 0 }}>{item.description}</p>
                                )}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecipeTr;