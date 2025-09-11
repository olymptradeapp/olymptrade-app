export default function HeaderRight() {
    // ambil dari env
    const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
    const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL;

    return (
        <div className="header-right flex flex-align-c flex-content-e">
            {/* Log In */}
            <div className="customer">
                <a
                    href={loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="las la-user-circle" />
                    <span>Log In</span>
                </a>
            </div>

            {/* Register */}
            <div className="buttons">
                <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button fullfield"
                >
                    <i className="las la-user-plus" />
                    <span>Register</span>
                </a>
            </div>
        </div>
    );
}
