class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hidden: true};
    }

    handleHidden = () => {
        this.setState(state => ({hidden: !state.hidden}))
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="logo"><a href="/">Website Title / Logo</a></div>
                    <div className="nav-items">
                        <div className="hamburger" onClick={this.handleHidden}>
                            <div className="bar"></div>
                        </div>
                        <ul className="large-nav">
                            <li><a href="/">Item1</a></li>
                            <li><a href="/">Item2</a></li>
                            <li><a href="/">Item3</a></li>
                            <li><a href="/">Item4</a></li>
                        </ul>
                        <div className={`menu ${this.state.hidden ? 'hidden-menu' : '' }`}>
                            <ul>
                                <li><a href="/">Item1</a></li>
                                <li><a href="/">Item2</a></li>
                                <li><a href="/">Item3</a></li>
                                <li><a href="/">Item4</a></li>
                            </ul>
                            <button id="close-btn" onClick={this.handleHidden}>X</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Welcome Message'}
    }

    handleText = () => {
        this.setState({text: 'Have a good time'})
    }

    render() {
        return (
            <div className="hero-bg">
                <h1 onClick={this.handleText}>{this.state.text}</h1>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    handleShow = () => {
        this.setState({show: false});
    } 

    render() {
        return (
            <div className="content">
                <h2>Section Title</h2>
                <div className="content-items">
                    <div className="box box1">
                        <p>Content Box 1</p>
                    </div>
                    <div className="box box2">
                        <p>Content Box 2</p>
                    </div>
                    <div className="box box3">
                        <p>Content Box 3</p>
                    </div>
                    <div className="box box4">
                        <p>Content Box 4</p>
                    </div>
                </div>
                <button id="action-btn" onClick={this.handleShow}>Call to Action</button>
                <div className={`content-items ${this.state.show ? 'hidden-items' : ''}`}>
                    <div className="box box5">
                        <p>Content Box 5</p>
                    </div>
                    <div className="box box6">
                        <p>Content Box 6</p>
                    </div>
                    <div className="box box7">
                        <p>Content Box 7</p>
                    </div>
                    <div className="box box8">
                        <p>Content Box 8</p>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Hero />
                <Content />
            </div>
        )
    }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);