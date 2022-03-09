import './index.scss';
import '../../index.scss';
import { HowItWorks } from './HowItWorks';
export function About() {
    return (
        <div className="bg text--center padding__10">
            <h1 className="font__reptile blue">About Diana</h1>
            <p className="bold blue">A platform that looks out for you</p>
            <p style={{ textAlign: 'start' }} className="">
                Diana empowers you to understand how your body works so you can
                look and feel your best.{' '}
            </p>
            <hr style={{ color: '#000000' }}></hr>
            <h2 className="font__poppins blue">Our Philosophy</h2>
            <h1 className="blue font__reptile">
                Sustainable wellness is a big-picture, inside out approach
            </h1>
            <p className="">
                Diana is on a mission to create thoughtful, science-backed
                solutions for women who want to make informed decisions about
                their health and wellness. <br />
                <br /> That’s why we’ve created an integrated ecosystem of:{' '}
            </p>
            <HowItWorks />
            <p className="blue font__dmsans">
                Consider us your nerdy ally who spends their time perfecting
                products that work because they want you to feel your best
                everyday.
            </p>
        </div>
    );
}
