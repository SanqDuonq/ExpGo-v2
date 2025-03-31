import React from 'react'
import { Tabs } from 'expo-router'
import { MyTabBar } from '@/components/tab-bar'

const TabLayout = () => {
    return (
        <Tabs 
            screenOptions={{headerShown: false}}
            tabBar={props => <MyTabBar {...props}/>}
        >
            <Tabs.Screen name='ticket' options={{title: 'Ticket'}}/>
            <Tabs.Screen name='location' options={{title: 'Location'}}/>
            <Tabs.Screen name='qr' options={{title: 'Qr Scan'}}/>
            <Tabs.Screen name='profile' options={{title: 'Profile'}}/>
        </Tabs>
    )
}

export default TabLayout