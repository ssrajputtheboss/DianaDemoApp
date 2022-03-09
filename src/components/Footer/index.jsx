import './index.scss';
import '../../index.scss';

export function Footer() {
    return (
        <footer
            style={{ alignItems: 'start' }}
            className="flex flex--column bg padding__30"
        >
            <div style={{ alignSelf: 'end' }}>
                <a href="/">
                    <img
                        style={{ marginRight: '10px' }}
                        className="icon"
                        src="/images/facebook.png"
                        alt="facebook"
                    ></img>
                </a>
                <a href="/">
                    <img
                        className="icon"
                        src="/images/twitter.png"
                        alt="twitter"
                    ></img>
                </a>
            </div>
            <button className="flex button__ghost align--center">
                Products{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <button className="flex button__ghost align--center">
                Our Science{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <button className="flex button__ghost align--center">
                Vision {'&'} Mission{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <button className="flex button__ghost align--center margin__10--y">
                About Us{' '}
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
            <div
                style={{ background: '#E3F4FF' }}
                className="divider width__100 margin__20--y"
            ></div>
            <p style={{ fontSize: 'x-small' }} className="font__poppins">
                Subscribe to our Newsletter
            </p>
            <div className="flex align--center">
                <input placeholder="Enter Your Email..." />
                <button className="button__email flex align--center">
                    <img
                        style={{ marginRight: '10px' }}
                        className="icon"
                        src="/images/mail.png"
                        alt=""
                    ></img>
                    Activate
                </button>
            </div>
        </footer>
    );
}
