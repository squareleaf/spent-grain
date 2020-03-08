import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './HaveGrain.css';

const HaveGrain: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>I Have Grain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">I Have Grain</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="I have grain page" />
      </IonContent>
    </IonPage>
  );
};

export default HaveGrain;
