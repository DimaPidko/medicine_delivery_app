/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './FavCosts.module.sass';

const FavCosts = () => {
    const [favorite, setFavorite] = useState([]);

    const updateFavorite = async (id) => {
        try {
            await axios.post(`http://localhost:3306/drugs/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error updating favorite:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3306/drugs`);
            const favoriteResponse = await response.data.filter(
                (elem) => elem.favorites === 1
            );
            setFavorite(favoriteResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            {favorite.length === 0 ? (
                <h2>Not found anything</h2>
            ) : (
                <ul className={styles.list}>
                    {favorite.map((cost) => (
                        <li
                            key={cost.id}
                            className={styles.list_item}>
                            <div>
                                <img
                                    src={cost.img}
                                    alt={cost.name}
                                    className={styles.img}
                                />
                            </div>
                            <h2>{cost.name}</h2>
                            <h3>Price: {cost.price}</h3>
                            <button
                                id={cost.id}
                                onClick={(e) => updateFavorite(e.target.id)}>
                                Remove from cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default FavCosts;
