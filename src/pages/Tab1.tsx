import { IonContent, IonAvatar, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>apresentção</IonTitle>
        </IonToolbar>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader className="cabeçalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">apresentação</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="teste" />  */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Título do cartão</IonCardTitle>
            <IonCardSubtitle>subtítulo do cartão</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>detalhes do pgamento</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
