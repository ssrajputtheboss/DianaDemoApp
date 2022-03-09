import '../../index.scss';
import './index.scss';
export function TrackYourMood() {
    return (
        <div className="padding__10">
            <h1 className="font__reptile">Track your mood</h1>
            <p
                style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                className="font__poppins"
            >
                All days and all moods are not made equal. But we can only
                improve what we measure. Track your mood and vitals (including
                skin and hair health) so you can take better care of yourself
                every day.
            </p>
            <button className="brand__button">Track you mood on the app</button>
            <div className="grid__2">
                <img
                    className="image--height"
                    src="/images/girl1.png"
                    alt=""
                ></img>
                <img
                    className="image--height"
                    src="/images/girl1.png"
                    alt=""
                ></img>
                <img
                    className="image--height"
                    src="/images/girl1.png"
                    alt=""
                ></img>
                <img
                    className="image--height"
                    src="/images/girl1.png"
                    alt=""
                ></img>
            </div>
        </div>
    );
}
