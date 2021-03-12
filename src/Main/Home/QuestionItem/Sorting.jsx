import React from 'react';
import style from './../Home.module.css';


const Sorting = (props) => {

    return (
        <div className={style.sorting}>
        
            Sorting: Activity (
                <span 
                    className={ props.sort === 'activity-asc' && style.activesort} 
                    onClick={props.getSorting} id='activity-asc'>
                        ASC
                        </span>, 
                <span 
                    className={ props.sort === 'activity-desc' && style.activesort} 
                    onClick={props.getSorting} id='activity-desc'> DESC</span>) 
                - Votes (
                <span className={ props.sort === 'votes-asc' && style.activesort} 
                onClick={props.getSorting} id='votes-asc'>ASC</span>, 
                <span className={ props.sort === 'votes-desc' && style.activesort} 
                onClick={props.getSorting} id='votes-desc'> DESC</span>)  
                - Creation (
                <span className={ props.sort === 'creation-asc' && style.activesort} 
                onClick={props.getSorting} id='creation-asc'>ASC</span>, 
                <span className={ props.sort === 'creation-desc' && style.activesort} 
                onClick={props.getSorting} id='creation-desc'> DESC</span>) 
        
        </div>
    );
}

export default Sorting;