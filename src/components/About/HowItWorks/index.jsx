import '../index.scss';
import '../../../index.scss';
export function HowItWorks() {
    const info = [
        {
            img: '/images/test.png',
            details:
                'Consciously formulated products that deliver feel-good results fast ',
        },
        {
            img: '/images/stars.png',
            details:
                'In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body',
        },
        {
            img: '/images/phone-call.png',
            details:
                'In-app consultation portals that connect you with compassionate wellness experts',
        },
    ];
    return (
        <div class="flex flex--column justify-center align-center">
            {info.map((step, index) => (
                <div>
                    <img className="image" src={step.img} alt="Can't load" />
                    <p className="margin__10--x font__dmsans">{step.details}</p>
                </div>
            ))}
        </div>
    );
}

/*
Consciously formulated products that deliver feel-good results fast 





In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body 





In-app consultation portals that connect you with compassionate wellness experts 
*/
