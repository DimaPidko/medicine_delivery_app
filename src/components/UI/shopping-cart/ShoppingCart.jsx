/* eslint-disable react/prop-types */
import Navigation from '../navigation/Navigation';
import FavCosts from './FavCosts/FavCosts';
import UserInfo from './UserInfo/UserInfo';

const ShoppingCart = (props) => {
    return (
        <>
            <Navigation />
            <UserInfo />
            <FavCosts selectedShop={props.selectedShop} />
        </>
    );
};

export default ShoppingCart;
