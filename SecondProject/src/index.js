const {React, ReactDOM} = window;
import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import App from './App.js';

function MainPage (){
    return (
        <div>
            <Header/>
            <MainContent />
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    <MainPage/>,
    <App/>,
    document.getElementById("root")
)

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)