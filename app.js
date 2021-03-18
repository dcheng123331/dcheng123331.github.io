const { useState } = React

const Nav = () => {

    const [hidden, setHidden] = useState(true);

    return (
        <div>
            <nav>
                <div class="logo"><a href="/">Website Title / Logo</a></div>
                <div class="nav-items">
                    <div class="hamburger" onClick={() => setHidden(!hidden)}>
                        <div class="bar"></div>
                    </div>
                    <ul class="large-nav">
                        <li><a href="/">Item1</a></li>
                        <li><a href="/">Item2</a></li>
                        <li><a href="/">Item3</a></li>
                        <li><a href="/">Item4</a></li>
                    </ul>
                    <div className={`menu ${hidden ? 'hidden-menu' : '' }`}>
                        <ul>
                            <li><a href="/">Item1</a></li>
                            <li><a href="/">Item2</a></li>
                            <li><a href="/">Item3</a></li>
                            <li><a href="/">Item4</a></li>
                        </ul>
                        <button id="close-btn" onClick={() => setHidden(!hidden)} style={{cursor: 'pointer'}}>X</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const Hero = () => {

    const [text, setText] = useState('Welcome Message');

    return (
        <div class="hero-bg">
            <h1 onClick={() => setText('Have a good time')}>{text}</h1>
        </div>
    )
}

const Content = () => {

    const [show, setShow] = useState(true);

    return (
        <div class="content">
            <h2>Section Title</h2>
            <div class="content-items">
                <div class="box box1">
                    <p>Content Box 1</p>
                </div>
                <div class="box box2">
                    <p>Content Box 2</p>
                </div>
                <div class="box box3">
                    <p>Content Box 3</p>
                </div>
                <div class="box box4">
                    <p>Content Box 4</p>
                </div>
            </div>
            <button id="action-btn" onClick={() => setShow(false)}>Call to Action</button>
            <div class={`content-items ${show ? 'hidden-items' : ''}`}>
                <div class="box box5">
                    <p>Content Box 5</p>
                </div>
                <div class="box box6">
                    <p>Content Box 6</p>
                </div>
                <div class="box box7">
                    <p>Content Box 7</p>
                </div>
                <div class="box box8">
                    <p>Content Box 8</p>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <Content />
      </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);