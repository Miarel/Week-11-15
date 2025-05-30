import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { journal } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: journal.image }} style={styles.image} />
      <Text style={styles.name}>{journal.name}</Text>
      <Text style={styles.description}>{journal.description}</Text>
      <Text style={styles.meta}>Category: {journal.category}</Text>
      <Text style={styles.meta}>Rating: {journal.rating}</Text>
      <Text style={styles.meta}>Date: {new Date(journal.date).toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        padding: 20
    },
    image: {
        width: '100%', 
        height: 200,
        borderRadius: 10, 
        marginBottom: 20 
    },
    name: { 
        fontSize: 24,
        fontWeight: 'bold' 
    },
    description: {
        fontSize: 16,
        marginVertical: 10
    },
    meta: { 
        fontSize: 14,
        marginVertical: 2
    },
});

export default DetailsScreen;
