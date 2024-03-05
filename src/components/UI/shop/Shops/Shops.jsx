/* eslint-disable react/prop-types */
import styles from './Shops.module.sass';

const Shops = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2>Shops:</h2>
            {props.shops.length === 0 ? (
                <h2>Not Found Shops</h2>
            ) : (
                <ul className={styles.list}>
                    {props.shops.map((shop) => (
                        <li
                            key={shop.id}
                            className={styles.list__item}>
                            <button
                                onClick={() => {
                                    props.onChangeShop(shop.link);
                                }}>
                                {shop.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Shops;
