import { Link } from 'react-router-dom';

import styles from './Navigation.module.sass';

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Shopping Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
