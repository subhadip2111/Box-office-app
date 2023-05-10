import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/Start';
import MainLayout from './component/MainLayout';
import Show from './pages/Show';
//import { ThemeProvider } from 'styled-components';
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { GlobalTheme } from './theme';
const queryClint=new QueryClient()

function App() {


  return (

    <QueryClientProvider client={queryClint}>
    <GlobalTheme >
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>not found</div>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/started" element={<Started />} />
        </Route>
<Route path="/show/:showId" element ={<Show/>}/>
        
      </Routes>
    </BrowserRouter>
    </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
