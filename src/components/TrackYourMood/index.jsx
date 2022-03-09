import '../../index.scss';
import './index.scss';
export function TrackYourMood() {
    return (
        <div className="padding__10 bg__lightpink">
            <h1 className="font__reptile  margin__30--y margin__10--x">
                Track your mood
            </h1>
            <p
                style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                className="font__poppins  margin__30--y margin__10--x"
            >
                All days and all moods are not made equal. But we can only
                improve what we measure. Track your mood and vitals (including
                skin and hair health) so you can take better care of yourself
                every day.
            </p>
            <button className="brand__button brand--blue margin__10--x margin__20--y">
                Track you mood on the app
            </button>
            <div className="grid__2">
                <img src="/images/girl2.png" alt=""></img>
                <img src="/images/girl3.png" alt=""></img>
                <img src="/images/girl1.png" alt=""></img>
                <img src="/images/girl1.png" alt=""></img>
            </div>
        </div>
    );
}
