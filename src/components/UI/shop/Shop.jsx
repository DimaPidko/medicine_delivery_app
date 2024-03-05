/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Navigation from '../navigation/Navigation';
import Shops from './Shops/Shops';
import { useState } from 'react';

import styles from './Shop.module.sass';
import ShowCase from './ShowCase/ShowCase';

const Shop = (props) => {
    const [selectedShop, setSelectedShop] = useState('drugs24');

    const onChangeShop = (shopId) => {
        setSelectedShop(shopId);
    };

    return (
        <>
            <Navigation />
            <div className={styles.wrapper}>
                <nav>
                    <Shops
                        shops={props.shops}
                        onChangeShop={onChangeShop}
                    />
                </nav>
                <main>
                    <ShowCase selectedShop={selectedShop} />
                </main>
            </div>
        </>
    );
};

export default Shop;
