import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


import '@ionic/react/css/core.css';


import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import '@ionic/react/css/palettes/dark.system.css';

import './theme/variables.css';
import { ItemList } from './todo';
import { ItemProvider } from './todo/ItemProvider';
import ItemEdit from './todo/ItemEdit';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <ItemProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/items" component={ItemList} exact={true}/>
          <Route path="/item" component={ItemEdit} exact={true}/>
          <Route path="/item/:id" component={ItemEdit} exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/items"/>}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </ItemProvider>
  </IonApp>
);

export default App;
