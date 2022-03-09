export function Footer() {
    return (
        <footer className="flex flex--column">
            <div style={{ float: 'right' }}>
                <img
                    className="icon"
                    src="/images/facebook.png"
                    alt="facebook"
                ></img>
                <img
                    className="icon"
                    src="/images/twitter.png"
                    alt="twitter"
                ></img>
            </div>
            <button className="button__ghost">
                Products{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <button className="button__ghost">
                Our Science{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <button className="button__ghost">
                Vision {'&'} Mission{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <button className="button__ghost">
                About Us{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <hr style={{ color: '#E3F4FF' }}></hr>
            <p style={{ fontSize: '10px' }} className="font__poppins">
                Subscribe to our Newsletter
            </p>
            <div className="flex align--center">
                <input placeholder="Enter Your Email..." />
                <button className="button__email">
                    <img className="icon" src="/images/mail.png" alt=""></img>
                    Activate
                </button>
            </div>
        </footer>
    );
}
