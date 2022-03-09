import '../../index.scss';
export function Consult() {
    return (
        <div className="">
            <h1 className="font__reptile">Consult with wellness experts</h1>
            <p
                style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                className="font__poppins"
            >
                Set up health consultations with experienced doctors and
                therapists on our app. Simply select a service, answer a few
                questions, and we’ll connect you to someone who is the right-fit
                for you.
            </p>
            <button className="brand__button">Get a consultation</button>
            <img className="width__100" src="/images/doctor.png" alt=""></img>
        </div>
    );
}
