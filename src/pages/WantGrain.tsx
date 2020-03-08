import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './WantGrain.css';

const WantGrain: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>I Want Grain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">I Want Grain</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Want grain page" />
      </IonContent>
    </IonPage>
  );
};

export default WantGrain;
