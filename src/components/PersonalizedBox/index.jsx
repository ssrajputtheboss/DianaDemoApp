import '../../index.scss';
import './index.scss';

/// Get Your Personalized Box section

export function PersonalizedBox() {
    return (
        <div
            style={{
                background: '#F66E6E',
                color: '#ffffff',
                border: '1px solid transparent',
            }}
            className="width__100"
        >
            <h1 className="font__reptile margin__20--y margin__20--x">
                Get your personalized period box
            </h1>
            <img className="width__100" src="/images/boxes.png" alt=""></img>
            <p
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                className="font__poppins margin__20--y margin__20--x"
            >
                Tailor your monthly box of organic period products without the
                organic price tag (no pink taxing here). Get it delivered to
                your doorstep in sustainable packaging and track your
                subscription on our app.
            </p>
            <button className="cta margin__30--y margin__10--x">
                Create your box on the app
                <img
                    className="icon"
                    src="/images/chevron-right.png"
                    alt=""
                ></img>
            </button>
        </div>
    );
}
