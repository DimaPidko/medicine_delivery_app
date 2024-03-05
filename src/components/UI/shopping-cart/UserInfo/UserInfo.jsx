const UserInfo = () => {
    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                />
            </div>
        </div>
    );
};

export default UserInfo;
