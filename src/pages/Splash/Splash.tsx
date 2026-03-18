import {View, Text, ActivityIndicator} from 'react-native';
import { Logo } from '../../components/Logo';
import { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
export function Splash() {
    const navigator = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigator.dispatch(CommonActions.navigate("Login"))
        }, 2000)
    }, [])

    return (
        <View style={{flex: 1}} className="gap-5">
            <View style={{flex: 0.3}} className=' justify-end items-center'>
                <Logo />
            </View>
            <View style={{flex:0.8}} className='items-center gap-7'>
                <View className='items-center'>
                    <Text className='text-3xl text-sky-800 font-normal'>Cuida Fácil</Text>
                    <Text className='text-lg'>Seu aplicativo de saúde pessoal</Text>
                </View>
                <ActivityIndicator size={"large"} />
            </View>
        </View>
    );
}
