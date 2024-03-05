import styles from './UserInfo.module.sass';

const UserInfo = () => {
    return (
        <form className={styles.form}>
            <div className={styles.form__body}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                />
            </div>
            <div className={styles.form__body}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                />
            </div>
            <div className={styles.form__body}>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                />
            </div>
            <div className={styles.form__body}>
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                />
            </div>
        </form>
    );
};

export default UserInfo;
