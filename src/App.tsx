import { BrowserRouter} from 'react-router-dom';
import { MainLayout } from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
