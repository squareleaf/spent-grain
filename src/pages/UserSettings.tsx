import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './UserSettings.css';

const UserSettings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="My settings page" />
      </IonContent>
    </IonPage>
  );
};

export default UserSettings;
