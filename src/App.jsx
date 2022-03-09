import './App.scss';
import './index.scss';
import {
    About,
    Consult,
    Footer,
    Header,
    MakeUsDifferent,
    PersonalizedBox,
    ShopSelfCareProducts,
    TrackYourMood,
    TrackYourPeriod,
} from './components';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <MakeUsDifferent />
            <ShopSelfCareProducts />
            <TrackYourMood />
            <TrackYourPeriod />
            <Consult />
            <PersonalizedBox />
            <div className="centered bg__main" style={{ height: '50vh' }}>
                <h1 className="font__reptile margin__20--x">
                    With Diana, you’re in control of your health, your every
                    day, and your story.
                </h1>
            </div>
            <Footer />
        </div>
    );
}

export default App;
