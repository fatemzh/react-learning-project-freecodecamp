const {React, ReactDOM} = window;
import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';

function App (){
    return (
        <div>
            <Header/>
            <MainContent />
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)