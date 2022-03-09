import '../../index.scss';
export function ShopSelfCareProducts() {
    return (
        <div style={{ background: '#DCE9E9' }} className="padding__10">
            <h2 className="font__poppins bold blue">
                Liberate your everyday wellness
            </h2>
            <h1 className="font__reptile blue">Shop our self-care products</h1>
            <p className="font__poppins">
                Gentle formulations thoughtfully engineered by specialist
                researchers and doctors to simplify your self-care and get
                results fast. And, we always list our ingredients - so what you
                see is what you get.
            </p>
            <button className="brand__button margin__10">
                Upgrade your self-care
            </button>
            <p className="text--center width__100 font__20 margin__10">
                #NoNasties, we promise!
            </p>
            <img className="width__100" src="/images/rose.png" alt=""></img>
        </div>
    );
}
