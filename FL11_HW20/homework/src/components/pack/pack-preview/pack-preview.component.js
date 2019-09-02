import React from 'react'
import classes from './pack-preview.module.scss'
import Stars from "./stars/stars.component";
import PropTypes from 'prop-types';


export const PackPreview = props => {

    return (
        <div className={classes.pack}>
            <div className={classes.emoji}>
                <span className={classes.big}>{props.emoji[0].char}</span>
                <span className={classes.med}>{props.emoji[1].char}</span>
                <span className={classes.sm}>{props.emoji[2].char}</span>
            </div>
            <div>
                <p className={classes.title}>{props.title}</p>
                <Stars stars={props.stars}/>
                <button className={classes.get} onClick={props.add} disabled={props.disabled}>Get ({props.price}$)</button>
            </div>
        </div>
    )
}

PackPreview.propTypes = {
    disabled: PropTypes.bool.isRequired,
    emoji: PropTypes.array.isRequired,
    stars: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired
}