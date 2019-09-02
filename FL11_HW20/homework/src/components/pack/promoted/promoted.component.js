import React from 'react'
import classes from "./promoted.module.scss";
import PropTypes from 'prop-types';


export const Promoted = props => {


    return (
        <div className={classes.wrapper}>
            <h2 >New</h2>
            <div>
                <h2>{props.promotedPack.title}</h2>
                <div>
                    <p>Includes</p>
                    <span>{props.promotedPack.emoji[0].char}</span>
                    <span>{props.promotedPack.emoji[1].char}</span>
                    <span>{props.promotedPack.emoji[2].char}</span>
                </div>
                <button className={classes.get} onClick={props.add} disabled={props.promotedPack.disableBtn}>Get
                    ({props.promotedPack.price}$)
                </button>
            </div>
        </div>

    )
}

Promoted.propTypes = {
    promotedPack: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired
}