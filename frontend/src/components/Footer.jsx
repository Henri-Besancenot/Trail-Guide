const Footer = () => (
    <footer
        style={{
            background: '#8C9C7C',
            color: '#000000ff',
            textAlign: 'center',
            padding: '1rem 0',
            width: '100%',
            position: 'relative',
            marginTop: '0px',
        }}
    >
        <p>&copy; {new Date().getFullYear()} Trail Guide. All rights reserved.</p>
        <div className="footer mt-8">
            <ul className="mt-4 text-left text-gray-300">
                <li className="mb-2">
                    <strong>HomePage</strong>: Back to home
                </li>
                <li className="mb-2">
                    <strong>Trails List</strong>: Browse all trails
                </li>
                <li className="mb-2">
                    <strong>About Us</strong>: Learn more about us
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;