import React from 'react';
import style from './Home.module.css';

const QuestionItem = (props) => {
    return (
        <div className={style.item}>
            <div className={style.cp}>
                <div className={style.votes}>{props.item.score}</div>
                <div className={style.answer}>{props.item.answer_count}</div>
                <div className={style.views}>{props.item.view_count}</div>

            </div>
        </div>
    )
}

export default QuestionItem;