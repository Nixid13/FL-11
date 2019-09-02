import React, {Component} from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import classes from './stars.module.scss'
import PropTypes from 'prop-types';


class Stars extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let stars = [];

        for (let i = 0; i < this.props.stars - 1; i++) {
            stars.push(<StarIcon className={classes.starItem} key={i}/>)
        }
        if (this.props.stars % 1) {
            stars.push(<StarHalfIcon className={classes.starItem} key={stars.length}/>)
        } else {
            stars.push(<StarIcon className={classes.starItem} key={stars.length}/>)
        }

        return (
            <div>{stars}</div>
        )
    }
}
Stars.propTypes = {
    stars: PropTypes.number.isRequired
}
export default Stars