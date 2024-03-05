/* eslint-disable react/prop-types */
import styles from './UserInfo.module.sass';

const UserInfo = ({ onChange, data }) => {
    const handleChange = (field, e) => {
        onChange(field, e.target.value);
    };

    return (
        <form className={styles.form}>
            <div className={styles.form__body}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    onChange={(e) => handleChange('name', e)}
                    value={data.name}
                    required
                />
            </div>
            <div className={styles.form__body}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={(e) => handleChange('email', e)}
                    value={data.email}
                    required
                />
            </div>
            <div className={styles.form__body}>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    onChange={(e) => handleChange('phone', e)}
                    value={data.phone}
                    required
                />
            </div>
            <div className={styles.form__body}>
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    onChange={(e) => handleChange('address', e)}
                    value={data.address}
                    required
                />
            </div>
        </form>
    );
};

export default UserInfo;
