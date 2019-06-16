import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import { Header, ProgressBar } from './components/common'

const App = () => {
    return (

        <Provider store={createStore(reducers)}> 
        {/* add reducer to store here */}
            <View>    
                <Header headerTitle="Tech Stack"/>
            </View>
        </Provider>
    );
};

export default App;
