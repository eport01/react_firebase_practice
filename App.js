import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/Header';
import Detail from './src/Detail';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component = {Home}
          name = 'Home'
          options = {{
            headerTitle: () => <Header name="To-Do List"/>,
            headerStyle: {
              backgroundColor:'#4c00b0',
              heaight:120
            }
          }}
        />
        <Stack.Screen 
          component = {NoteAdd}
          name = 'NoteAdd'
          options = {{
            headerTitle: () => <Header name="Add Item"/>,
            headerStyle: {
              backgroundColor:'#4c00b0',
              heaight:120
            }
          }}
        />
        <Stack.Screen 
          component = {Detail}
          name = 'Detail'
          options = {{
            headerTitle: () => <Header name="Edit Item"/>,
            headerStyle: {
              backgroundColor:'#4c00b0',
              heaight:120
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


