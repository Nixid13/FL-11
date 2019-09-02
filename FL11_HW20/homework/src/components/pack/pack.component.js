import React, {Component} from 'react'
import {PackPreview} from "./pack-preview/pack-preview.component";
import classes from './pack.module.scss'
import {Promoted} from "./promoted/promoted.component";
import {Basket} from "../basket/basket.component";

class Pack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pack: [],
            basket: [],
            promoted: 1
        }
        this.addToBasket = this.addToBasket.bind(this);
        this.deleteFromBasket = this.deleteFromBasket.bind(this);
        this.purchaseItems = this.purchaseItems.bind(this);
    }

    addToBasket(event) {
        const packName = event.target.parentNode.firstChild.innerText;

        this.state.pack.map(item => {
            if (item.title.includes(packName)) {
                item.disableBtn = true;
                this.setState(state => {
                    const basket = state.basket.concat(item);
                    return {basket};
                })
            }

        });
    }

    deleteFromBasket(event, index) {
        const packName = event.target.parentNode.firstChild.innerText;
        this.state.pack.map((item) => {
            if (item.title.includes(packName)) {
                item.disableBtn = false;
                this.state.basket.splice(index, 1);
                this.setState({basket: this.state.basket});
                this.setState(state => {
                    const pack = state.pack;
                    return {pack}
                })
            }
        })
    }

    purchaseItems() {
        alert('Purchase completed');
        this.setState({basket: []});
        this.state.pack.map((item) => {
            item.disableBtn = false;
        })
    }


    componentDidMount() {
        fetch('http://localhost:1337/emoji-shop')
            .then(response => response.json())
            .then(data => {
                const emoji = data.emoji.map(item => {
                    item.disableBtn = false;
                })
                this.setState({
                    pack: data.emoji
                })
            })

    }

    render() {
        const packItem = this.state.pack.map(item => {
            return (
                <PackPreview disabled={item.disableBtn} key={item.id} emoji={item.emoji} stars={item.stars}
                             title={item.title} price={item.price} add={this.addToBasket}
                />
            )
        })

        if (!this.state.pack.length) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <div className={classes.main}>
                        <Promoted promotedPack={this.state.pack[this.state.promoted]} add={this.addToBasket}/>
                        <Basket purchase={this.purchaseItems} delete={this.deleteFromBasket}
                                basket={this.state.basket}/>
                    </div>
                    <div className={classes.wrapper}>{packItem}</div>
                </div>
            )
        }
    }
}


export default Pack