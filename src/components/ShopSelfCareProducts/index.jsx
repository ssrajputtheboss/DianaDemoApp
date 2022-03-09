import '../../index.scss';
export function ShopSelfCareProducts() {
    return (
        <div
            style={{
                background: 'url("/images/rose.png")',
                backgroundSize: 'cover',
                height: '150vh',
            }}
            className="padding__30"
        >
            <h2 className="font__poppins margin__30--y bold blue">
                Liberate your everyday wellness
            </h2>
            <h1 className="font__reptile blue">Shop our self-care products</h1>
            <p className="font__poppins margin__30--y">
                Gentle formulations thoughtfully engineered by specialist
                researchers and doctors to simplify your self-care and get
                results fast. And, we always list our ingredients - so what you
                see is what you get.
            </p>
            <button className="brand__button brand--red margin__10">
                Upgrade your self-care
            </button>
            <p className="text--center width__100 font__20 margin__10">
                #NoNasties, we promise!
            </p>
        </div>
    );
}
