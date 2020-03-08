import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonLabel } from '@ionic/react';
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
        <IonGrid>
          <IonRow>
            <IonCol>Your name (optional)</IonCol>
            <IonCol>Name input</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Street address</IonCol>
            <IonCol>Street address input</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>City</IonCol>
            <IonCol>City input</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Where will the grain be? (driveway, porch, curb, etc)</IonCol>
            <IonCol>Grain location input</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Any grain details? (type of grain, adjuncts mixed in, etc)</IonCol>
            <IonCol>Grain details input</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Any pickup details? ("Pick up before 6pm", "Do not ring the bell")</IonCol>
            <IonCol>Pickup details input</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default HaveGrain;
