const {React, ReactDOM} = window;

function Page (){
    return (
        <div>
            <h1>Reasons why I want to learn React</h1>
            <ol>
                <li>Find a job</li>
                <li>Improve my coding skills</li>
            </ol>
        </div>
    )
}


ReactDOM.render(
    <Page/>,
    document.getElementById("root")
)