import './index.scss';
import '../../index.scss';
import { HowItWorks } from './HowItWorks';
export function About() {
    return (
        <div className="bg__about text--center padding__30">
            <h1 className="blue font__reptile margin__40--y">About Diana</h1>
            <h3 className="bold blue margin__40--y">
                A platform that looks out for you
            </h3>
            <p style={{ textAlign: 'start' }} className="">
                Diana empowers you to understand how your body works so you can
                look and feel your best.{' '}
            </p>
            <div
                style={{ background: '#000000' }}
                className="divider margin__20--y"
            ></div>
            <h2 className="font__poppins blue bold margin__30--y">
                Our Philosophy
            </h2>
            <h1 className="blue font__reptile margin__40--y">
                Sustainable wellness is a big-picture, inside out approach
            </h1>
            <p className="blue font__dmsans bold">
                Diana is on a mission to create thoughtful, science-backed
                solutions for women who want to make informed decisions about
                their health and wellness. <br />
                <br /> That’s why we’ve created an integrated ecosystem of:{' '}
            </p>
            <HowItWorks />
            <p className="blue margin__20--y font__dmsans bold">
                Consider us your nerdy ally who spends their time perfecting
                products that work because they want you to feel your best
                everyday.
            </p>
        </div>
    );
}
