/* eslint-disable react/prop-types */
import Navigation from '../navigation/Navigation';
import FavCosts from './FavCosts/FavCosts';
import UserInfo from './UserInfo/UserInfo';

import styles from './ShoppingCart.module.sass';
import { useState } from 'react';

const ShoppingCart = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        total: 0,
    });

    const onGetInfo = () => {
        console.log(userInfo);
        setUserInfo({ name: '', email: '', phone: '', address: '' });
    };

    const handleUserInfoChange = (field, value) => {
        setUserInfo({
            ...userInfo,
            [field]: value,
        });
    };

    return (
        <section>
            <Navigation />
            <div className={styles.wrapper}>
                <UserInfo
                    onChange={handleUserInfoChange}
                    data={userInfo}
                />
                <FavCosts />
            </div>
            <button
                onClick={() => onGetInfo()}
                className={styles.btn}>
                SUBMIT
            </button>
        </section>
    );
};

export default ShoppingCart;
