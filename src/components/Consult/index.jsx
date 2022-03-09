import '../../index.scss';
export function Consult() {
    return (
        <div
            style={{
                background:
                    'linear-gradient(270deg, #DADAE4 0.25%, #EEEEF0 24.33%, #F8F8F8 52.08%, #FEFEFE 100%)',
                border: '1px solid transparent',
            }}
            className="width__100"
        >
            <h1 className="font__reptile margin__30--y margin__20--x">
                Consult with wellness experts
            </h1>
            <p
                style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                className="font__poppins margin__30--y margin__20--x"
            >
                Set up health consultations with experienced doctors and
                therapists on our app. Simply select a service, answer a few
                questions, and we’ll connect you to someone who is the right-fit
                for you.
            </p>
            <button className="brand__button brand--blue margin__20--y margin__10--x">
                Get a consultation
            </button>
            <img className="width__100" src="/images/doctor.png" alt=""></img>
        </div>
    );
}
