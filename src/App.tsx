import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import WantGrain from './pages/WantGrain';
import HaveGrain from './pages/HaveGrain';
import UserSettings from './pages/UserSettings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/want-grain" component={WantGrain} exact={true} />
          <Route path="/have-grain" component={HaveGrain} exact={true} />
          <Route path="/user-settings" component={UserSettings} />
          <Route path="/" render={() => <Redirect to="/want-grain" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/want-grain">
            <IonIcon icon={triangle} />
            <IonLabel>I Want Grain</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/have-grain">
            <IonIcon icon={ellipse} />
            <IonLabel>I Have Grain</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/user-settings">
            <IonIcon icon={square} />
            <IonLabel>My Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
