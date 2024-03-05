/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';

import Router from '../router/Router';

function App() {
    const [shops, setShops] = useState([]);
    const [selectedShop, setSelectedShop] = useState('drugs24');

    const onChangeShop = (shopId) => {
        setSelectedShop(shopId);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3306/shops');
            setShops(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Router
            shops={shops}
            onChangeShop={onChangeShop}
            selectedShop={selectedShop}
        />
    );
}

export default App;
