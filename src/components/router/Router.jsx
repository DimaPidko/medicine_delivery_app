/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from '../UI/shop/Shop';
import ShoppingCart from '../UI/shopping-cart/ShoppingCart';
import { useEffect, useState } from 'react';

const Router = (props) => {
    const [total, setTotal] = useState(0);

    const handleTotal = (total) => {
        setTotal(total);
    };

    useEffect(() => {
        console.log(total);
    }, [total]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Shop
                            shops={props.shops}
                            selectedShop={props.selectedShop}
                            onChangeShop={props.onChangeShop}
                            onUpdateTotal={handleTotal}
                        />
                    }
                    path="/"
                />
                <Route
                    element={
                        <ShoppingCart
                            selectedShop={props.selectedShop}
                            onChangeShop={props.onChangeShop}
                            total={total}
                        />
                    }
                    path="/cart"
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
