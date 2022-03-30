import './App.css';
import Headline from './Headline';
import Input from './Input';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Headline text="Hey My Name is Brian" />
                <Input />
            </header>
        </div>
    );
}

export default App;
