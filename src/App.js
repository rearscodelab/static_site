import './App.css';
import Header from './components/header';
import Learning from './components/learning';
import LiveClass from './components/liveClass';
import Lesson from './components/lesson';
import Standards from './components/standards';
import College from './components/college';
import Knowledge from './components/knowledge';
import Subscribe from './components/subscribe';
import More from './components/more';
import { useMediaQuery } from '@mui/material';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div className="App" style={{padding: isMobile ? "10px 10px 10px 10px" : "10px 10px 10px 10vh"}}>
     <Header />
     <Learning />
     <LiveClass />
     <Lesson />
     <Standards />
     <College />
     <Knowledge />
     <Subscribe />
     <More />
    </div>
  );
}

export default App;
