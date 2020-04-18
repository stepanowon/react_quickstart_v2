import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import pMinDelay from 'p-min-delay';

import Header from './Header';
import Loading from './Loading';

//const Home = React.lazy(()=> import(/* webpackChunkName:"home" */ "./Home"));
const Home = React.lazy(()=> pMinDelay(import(/* webpackChunkName:"home" */ "./Home"), 1000));
const About = React.lazy(()=> pMinDelay(import(/* webpackChunkName:"about" */ "./About"), 1000));
const SongList = React.lazy(()=> pMinDelay(import(/* webpackChunkName:"songs" */ "./SongList"), 1000));
const Members = React.lazy(()=> pMinDelay(import(/* webpackChunkName:"members" */ "./Members"), 1000));
const NotFound = React.lazy(()=> pMinDelay(import(/* webpackChunkName:"home" */ "./NotFound"), 1000));

const App = () => {
    const [members] = useState([
        { name: 'Maggie Adams', photo: 'photos/Mag.png' },
        { name: 'Sammie Purcell', photo: 'photos/Sam.png' },
        { name: 'Tim Purcell', photo: 'photos/Tim.png' },
        { name: 'Scott King', photo: 'photos/King.png' },
        { name: 'Johnny Pike', photo: 'photos/JPike.jpg' },
        { name: 'Toby Ruckert', photo: 'photos/Toby.jpg' },
    ]);
    const [songs] = useState([
        { id:1, title:"Fallin' for you", musician:'Colbie callet', youtube_link:'PABUl_EX_hw' },
        { id:2, title:"Can't hurry love", musician:'The supremes', youtube_link:'EJDPhjQft04' },
        { id:3, title:"Landslide", musician:'Dixie chicks', youtube_link:'V2N7gYom9-A' },
        { id:4, title:"Can't let go", musician:'Linda ronstadt', youtube_link:'P-EpGKXmoe4' },
        { id:5, title:"Doctor my eyes", musician:'Jackson Browne', youtube_link:'7JlFKS_1oZk' },
        { id:6, title:"We gotta get you a woman", musician:'Todd Rundgren', youtube_link:'EyUjbBViAGE' },
        { id:7, title:"Hip to my heart", musician:'Band Perry', youtube_link:'vpLCFnD9LFo' },
        { id:8, title:"Rolling in the deep", musician:'Adele', youtube_link:'EvK8pDK6IQU' }
    ]);

    return (
      <React.Suspense fallback={<Loading />}>
          <Router>
              <div className="container">
              <Header />
              <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/about" render={ (props) => <About {...props} title="여우와 늙은이들" />  } />
                  <Route path="/members" 
                      render={ (props) => <Members {...props} members={members} /> } />
                  <Route path="/songs" render={(props) => <SongList {...props} songs={songs} /> } />
                  <Redirect exact from="/" to="/home"/>
                  <Route component={NotFound} />
              </Switch>
              </div>
          </Router>
      </React.Suspense>
    );
};

export default App;