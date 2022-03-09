import '../../index.scss';
export function Header() {
    return (
        <header className="flex shadow width__100 justify--between padding__10 common__margin align--center">
            <button className="button__ghost">
                <img
                    className="icon__square"
                    src="/images/menu.png"
                    alt="menu-icon"
                />
            </button>
            <div className="align--center">
                <button className="button__ghost">
                    <img
                        style={{ marginRight: '20px' }}
                        className="icon__square"
                        src="/images/shopping-cart.png"
                        alt="cart-icon"
                    />
                </button>
                <button className="button__ghost">
                    <img
                        className="icon__square"
                        src="/images/bell.png"
                        alt="bell-icon"
                    />
                </button>
            </div>
        </header>
    );
}
