import '../../index.scss';
import './index.scss';
export function PersonalizedBox() {
    return (
        <div className="">
            <h1 className="font__reptile">Get your personalized period box</h1>
            <img className="width__100" src="/images/boxes.png" alt=""></img>
            <p
                style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                className="font__poppins"
            >
                Tailor your monthly box of organic period products without the
                organic price tag (no pink taxing here). Get it delivered to
                your doorstep in sustainable packaging and track your
                subscription on our app.
            </p>
            <button className="cta">
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
