/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Navigation from '../navigation/Navigation';
import Shops from './Shops/Shops';
// import { useState } from 'react';

import styles from './Shop.module.sass';
import ShowCase from './ShowCase/ShowCase';

const Shop = (props) => {
    return (
        <>
            <Navigation />
            <div className={styles.wrapper}>
                <nav>
                    <Shops
                        shops={props.shops}
                        onChangeShop={props.onChangeShop}
                    />
                </nav>
                <main>
                    <ShowCase selectedShop={props.selectedShop} />
                </main>
            </div>
        </>
    );
};

export default Shop;
