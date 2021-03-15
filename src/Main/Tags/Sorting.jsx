import React from 'react';
import style from './Tags.module.css';


const Sorting = (props) => {

    return (
        <div className={style.sorting}>
        
            Sorting: Popular (
                <span 
                    className={ props.sort === 'popular-asc' && style.activesort} 
                    onClick={props.getSorting} id='popular-asc'>
                        ASC
                        </span>, 
                <span 
                    className={ props.sort === 'popular-desc' && style.activesort} 
                    onClick={props.getSorting} id='popular-desc'> DESC</span>) 
                - Activity (
                <span className={ props.sort === 'activity-asc' && style.activesort} 
                onClick={props.getSorting} id='activity-asc'>ASC</span>, 
                <span className={ props.sort === 'activity-desc' && style.activesort} 
                onClick={props.getSorting} id='activity-desc'> DESC</span>)  
                - Name (
                <span className={ props.sort === 'name-asc' && style.activesort} 
                onClick={props.getSorting} id='name-asc'>ASC</span>, 
                <span className={ props.sort === 'name-desc' && style.activesort} 
                onClick={props.getSorting} id='name-desc'> DESC</span>) 
        
        </div>
    );
}

export default Sorting;