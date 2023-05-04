import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Started from './pages/Start';
import MainLayout from './component/MainLayout';
import Show from './pages/Show';

import { QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClint=new QueryClient()


function App() {


  return (

    <QueryClientProvider client={queryClint}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>not found</div>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/started" element={<Started />} />
        </Route>
<Route path="/show/:showId" element ={<Show/>}/>
        {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
