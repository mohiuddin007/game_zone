import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home/Home';
import ReviewDetails from '../Screens/ReviewDetails/ReviewDetails';


const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);