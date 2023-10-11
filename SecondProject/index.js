const {React, ReactDOM} = window;

function Page (){
    return (
        <div>
            <Header/>
            <MainContent />
            <Footer/>
        </div>
    )
}

function Header (){
    return (
        <header>
            <nav className="nav">
                <img src="../SecondProject/logo.png" alt="" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent (){
    return(
        <div className="main-content">
            <h1>Reasons why I want to learn React</h1>
            <ol className="list-reasons">
                <li>Find a job</li>
                <li>Improve my coding skills</li>
            </ol>
        </div>
    )
}
function Footer (){
    return(
        <footer className="footer">
            <small>@2023 ABID development. All rights reserved.</small>
        </footer>
    )
}


ReactDOM.render(
    <Page/>,
    document.getElementById("root")
)