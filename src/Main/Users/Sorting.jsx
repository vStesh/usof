import React from 'react';
import style from './Users.module.css';


const Sorting = (props) => {

    return (
        <div className={style.sorting}>
        
            Sorting: Reputation (
                <span 
                    className={ props.sort === 'reputation-asc' && style.activesort} 
                    onClick={props.getSorting} id='reputation-asc'>
                        ASC
                        </span>, 
                <span 
                    className={ props.sort === 'reputation-desc' && style.activesort} 
                    onClick={props.getSorting} id='reputation-desc'> DESC</span>) 
                - Creation (
                <span className={ props.sort === 'creation-asc' && style.activesort} 
                onClick={props.getSorting} id='creation-asc'>ASC</span>, 
                <span className={ props.sort === 'creation-desc' && style.activesort} 
                onClick={props.getSorting} id='creation-desc'> DESC</span>)  
                - Name (
                <span className={ props.sort === 'name-asc' && style.activesort} 
                onClick={props.getSorting} id='name-asc'>ASC</span>, 
                <span className={ props.sort === 'name-desc' && style.activesort} 
                onClick={props.getSorting} id='name-desc'> DESC</span>) 
        
        </div>
    );
}

export default Sorting;