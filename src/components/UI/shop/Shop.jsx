/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Navigation from '../navigation/Navigation';
import Shops from './Shops/Shops';
import { useEffect, useState } from 'react';

import styles from './Shop.module.sass';
import ShowCase from './ShowCase/ShowCase';

const Shop = (props) => {
    const [total, setTotal] = useState(0);

    const handleUpdateTotal = (price) => {
        setTotal((prevTotal) => prevTotal + price);
    };

    useEffect(() => {
        props.onUpdateTotal(total);
    }, [total]);

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
                    <ShowCase
                        selectedShop={props.selectedShop}
                        onUpdateTotal={handleUpdateTotal}
                    />
                </main>
            </div>
        </>
    );
};

export default Shop;
