/* eslint-disable react/prop-types */
import Navigation from '../navigation/Navigation';
import FavCosts from './FavCosts/FavCosts';
import UserInfo from './UserInfo/UserInfo';

import styles from './ShoppingCart.module.sass';

const ShoppingCart = (props) => {
    return (
        <section>
            <Navigation />
            <div className={styles.wrapper}>
                <UserInfo />
                <FavCosts selectedShop={props.selectedShop} />
            </div>
            <button className={styles.btn}>SUBMIT</button>
        </section>
    );
};

export default ShoppingCart;
