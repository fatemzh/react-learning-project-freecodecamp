const { React, ReactDOM } = window;

const menu = (
    <div>
        <h1>Menu</h1>
        <h2>Appetizers</h2>
        <ul>
            <li>Nems</li>
            <li>Samossa</li>
            <li>Soup</li>
        </ul>
        <h2>Main dishes</h2>
        <ul>
            <li>Bo Bun</li>
            <li>Pad thai</li>
            <li>Pho</li>
        </ul>
    </div>
)

//document.getElementById("root").append(JSON.stringify(menu))
ReactDOM.render(menu, document.getElementById("root"))