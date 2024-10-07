import { StyleSheet, Text, View , TouchableOpacity , TextInput} from 'react-native'
import React,{useState , useEffect} from 'react'
import {Client , Account , ID , Models} from "react-native-appwrite"
import { useNavigation } from '@react-navigation/native';




let client: Client;
let account: Account;
// wrote account as Account: it's just aka like Computer alias PC


client = new Client();
// client me ek method use Client()


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6703f75e000c09bd4a29')
    .setPlatform('com.taussy10.ELearning'); 

// It gave 3 function setEndpoint ... setproject and setPlatform 


account = new Account(client);




const Auth = () => {

    const [loggedInUser, setLoggedInUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  

 useEffect(() => {
  if (loggedInUser) {
    navigation.navigate("Tabs")
    
  }}, [])
 
    // Created a function for Login 
    async function login(email: string, password: string) {
      await account.createEmailPasswordSession(email, password);
      setLoggedInUser(await account.get());
    }
  
    // Create a function for registering a user 
    async function register(email: string, password: string, name: string) {
      await account.create(ID.unique(), email, password, name);
      await login(email, password);
      setLoggedInUser(await account.get());
    }

    const navigation = useNavigation();

  return (
    <View style={styles.root}>
    <Text>
    {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
    </Text>
    <View>
    <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
    />
    <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
    />
    <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
    />

    <TouchableOpacity
        style={styles.button}
        onPress={() => login(email, password)}
    >
        <Text>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={()=> register(email, password, name)}
    >
        <Text>Register</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={async () => {
        await account.deleteSession('current');
        setLoggedInUser(null);
        }}
    >
        <Text>Logout</Text>
    </TouchableOpacity>
    </View>
</View>

  )
}

export default Auth

const styles = StyleSheet.create({
    root: {
      marginTop: 40, 
      marginBottom: 40
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'gray',
      padding: 10,
      marginBottom: 10,
      alignItems: 'center',
    },
  });
  












