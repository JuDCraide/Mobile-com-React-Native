import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(res => {
            console.log(res.data);
            setProjects(res.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

            {/* <View style={styles.container} >
                <Text style={styles.title}>Projetos:</Text>
                {projects.map(project =>
                    <Text key={project.id} style={styles.project}>{project.title}</Text>
                )}
            </View> */}
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Projetos:</Text>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 52,
        fontWeight: 'bold',
    },
    project: {
        color: '#FFF',
        fontSize: 40,
    },
})