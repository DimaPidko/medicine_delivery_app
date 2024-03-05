/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from '../UI/shop/Shop';
import ShoppingCart from '../UI/shopping-cart/ShoppingCart';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Shop
                            shops={props.shops}
                            selectedShop={props.selectedShop}
                            onChangeShop={props.onChangeShop}
                        />
                    }
                    path="/"
                />
                <Route
                    element={
                        <ShoppingCart
                            selectedShop={props.selectedShop}
                            onChangeShop={props.onChangeShop}
                        />
                    }
                    path="/cart"
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
