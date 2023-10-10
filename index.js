const { React, ReactDOM } = window;

const navbar = (
    <nav>
        <h1>Fatem's Shop</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)
