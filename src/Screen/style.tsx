
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#555',
    },
    value: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        textAlign: 'right',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // semi-transparent background
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
    },
    TextView:{
        marginBottom:10
    },
    TextField:{
        borderColor:'skyblue',
        borderWidth:1,
        marginBottom:10,
        borderRadius:5
    },
    TextHeader:{
        fontSize:30,
        color:'white',
        backgroundColor:'blue',
        padding:8,
        borderRadius:10
    },
    TextError:{
        color:'red',
        fontSize:20,
    },
    UIview:{
        height:200,
        width:200
    }
});
  