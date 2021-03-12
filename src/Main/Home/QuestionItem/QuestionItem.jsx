import React from 'react';
import style from './../Home.module.css';
import Tags from './Tags';

const QuestionItem = (props) => {
    let startedText = () => { 
        // console.log(props.item.last_activity_date);
        let text = '';
        if(props.item.last_activity_date === props.item.creation_date) {
            text += 'asked';
        } else {
            text += 'modified';
        }
        let now = Date.now();
        // console.log('now - ' + now);
        text += ' ' + Math.ceil((now  - props.item.last_activity_date * 1000) / 60000) + ' min ago';
        return text;
    } 
    return (
        <div className={style.item}>
            <div className={style.cp}>
                <div className={style.votes}>
                    <div className={style.counts}>{props.item.score}</div>
                    <div>votes</div>
                </div>
                <div className={ style.answer + ' ' + (props.item.answer_count ? style.answered : '') }>
                    <div className={style.counts}>{props.item.answer_count}</div>
                    <div>answers</div>
                </div>
                <div className={style.views}>
                    <div className={style.counts}>{props.item.view_count}</div>
                    <div>views</div>
                </div>
            </div>
            <div className={style.summary}>
                <div className={style.title}>{props.item.title}</div>
                <Tags tags={props.item.tags} />
                <div className={style.started}>
                    <div className={style.time}>{startedText()} </div>
                    <div className={style.owner}><a href="#">{props.item.owner.display_name}</a></div>
                    <div className={style.reputation}>{props.item.owner.reputation}</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionItem;