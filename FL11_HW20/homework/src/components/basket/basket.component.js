import React, {Component} from 'react'
import classes from './basket.module.scss'

export class Basket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.basket,
        }
    }

    render() {
        const inBasket = this.props.basket.map((item, index)=> {
            return (<div key={item.id}>
                    <span>{item.title}</span> - <span>{item.price}$</span>
                    <span className={classes.deleteBtn} onClick={(e)=>{this.props.delete(e, index)}}>x</span>
                </div>
            )

        })
        let price = 0;
        this.props.basket.map(item => {
            price += item.price

        })

        if(this.props.basket.length) {
            return (
                <div className={classes.wrapper}>
                    <h3>Basket</h3>
                    {inBasket}
                    <button className={classes.purchaseBtn} onClick={this.props.purchase}>Purchase ({price}$)</button>
                </div>
            )
        } else {
            return (
                <div className={classes.wrapper}>
                    <h3>Basket</h3>
                    <p><i>No items to purchase</i></p>
                </div>
            )
        }



    }


}


