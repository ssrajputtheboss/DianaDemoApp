import '../../index.scss';
export function Header() {
    return (
        <div className="flex justify--between padding__10 common__margin align--center">
            <img
                className="icon__square"
                src="/images/menu.png"
                alt="menu-icon"
            />
            <div className="align--center">
                <img
                    style={{ marginRight: '20px' }}
                    className="icon__square"
                    src="/images/shopping-cart.png"
                    alt="cart-icon"
                />
                <img
                    className="icon__square"
                    src="/images/bell.png"
                    alt="bell-icon"
                />
            </div>
        </div>
    );
}
