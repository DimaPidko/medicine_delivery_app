/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './ShowCase.module.sass';

const ShowCase = (props) => {
    const [costs, setCosts] = useState([]);

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
            const filterResponse = response.data.filter(
                (elem) => elem.store_name === props.selectedShop
            );
            setCosts(filterResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props]);

    return (
        <>
            {costs.length === 0 ? (
                <h2>Not found anything</h2>
            ) : (
                <ul className={styles.list}>
                    {costs.map((cost) => (
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
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ShowCase;
