import './App.scss';
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
            <PersonalizedBox />
            <Consult />
            <div className="centered bg__main">
                <h1 className="font__reptile">
                    With Diana, you’re in control of your health, your every
                    day, and your story.
                </h1>
            </div>
            <Footer />
        </div>
    );
}

export default App;
