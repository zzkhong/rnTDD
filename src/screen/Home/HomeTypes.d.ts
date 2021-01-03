import {StackNavigationProp} from '@react-navigation/stack';

// Navigation and Props
type HomeNavigationProp = StackNavigationProp<RouteTypeList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

// Redux Reducer Types

interface HomeState {
  title: string;
}

interface SetTitleAction {
  type: string;
  title: string;
}

interface RemoveTitleAction {
  type: string;
  title: string;
}

type HomeActionTypes = SetTitleAction | RemoveTitleAction;
