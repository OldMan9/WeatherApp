import React from 'react'
import { View, Text, StyleSheet, ImageBackground,
    ActivityIndicator, FlatList, Linking } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'


export const SearchResults = (props) => {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={ { paddingBottom: 30 } }
                    data={props.navigation.getParam('searchResults').list}
                    renderItem={({item}) => {
                        return (
                            <Card
                                title={item.dt_txt}
                            >
                            <Text style={{marginBottom: 10}}>
                                { ` temp: ${item.main.temp} - wind speed: ${item.wind.speed} - ${item.weather[0].description}` }
                            </Text>
                                <Button
                                    icon={<Icon type={'AntDesign'} name='info' color='#ffffff' />}
                                    backgroundColor='#03A9F4'
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='  VIEW NOW'
                                    onPress={() => Linking.openURL(`https://www.imdb.com/title/${item.imdbID}/`)}
                                    
                                />
                            </Card>    
                        )
                    }}
                />
            </View>
        )    
    }

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 36,
        color: '#1e1e1e',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})