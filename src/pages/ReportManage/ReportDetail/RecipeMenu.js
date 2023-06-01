import React, { useEffect, useRef, useState } from 'react';
import './RecipeMenu.css'

const RecipeMenu = ({ info, handleHide, handleComplete }) => {
    const onHide = () => {
        handleHide(info.recipeReportIdx)
    }

    const onComplete = () => {
        handleComplete(info.recipeReportIdx)
    }

    const modal = useRef();
    const [isOpen, setOpen] = useState(false);

    const handleCloseModal = e => {
        if (isOpen && (!modal.current || !modal.current.contains(e.target))) setOpen(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleCloseModal);
        return () => {
            window.removeEventListener('click', handleCloseModal);
        };
    }, []);

    return (
        <div className='detailMenuBox' ref={modal}>
            <div id='top' className='detailMenu'>레시피 숨기기</div>
            <div id='bottom' className='detailMenu'>신고 완료 처리</div>
        </div >

    )
}

export default RecipeMenu;