export function TrackYourPeriod() {
    return (
        <div
            style={{
                background:
                    'linear-gradient(176.88deg, #F3B8BC 2.58%, #FFDAD4 93.07%)',
                border: '1px solid transparent',
            }}
            className="width__100 "
        >
            <h1 className="font__reptile margin__30--y margin__20--x">
                Track Your Period
            </h1>
            <p
                style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                className="font__poppins margin__30--y margin__20--x"
            >
                Stay in the know with reliable AI-based and science-backed
                period, ovulation, and PMS predictions. The intuitive design
                makes tracking your cycle effortless and helps you stay on top
                of your monthly data.
            </p>
            <button className="brand__button brand--red margin__20--y margin__10--x">
                Track you period on the app
            </button>
            <img className="width__100" src="/images/calendar.png" alt=""></img>
        </div>
    );
}
