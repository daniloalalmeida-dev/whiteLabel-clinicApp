//http://clinica-env.eba-tcaixkh2.sa-east-1.elasticbeanstalk.com/

/* {
    "routes": [
    {
    "name": "Create User",
    "uri": "http://clinica-env.eba-tcaixkh2.sa-east-1.elasticbeanstalk.com/users",
    "method": "POST"
    },
    {
    "name": "Sign In",
    "uri": "http://clinica-env.eba-tcaixkh2.sa-east-1.elasticbeanstalk.com/sign-in",
    "method": "POST"
    }
    ]
} */

import { Alert, Platform } from "react-native";

/* const server = Platform.OS === 'ios'
    ? 'http://clinica-env.eba-tcaixkh2.sa-east-1.elasticbeanstalk.com/'
    : 'http://clinica-env.eba-tcaixkh2.sa-east-1.elasticbeanstalk.com/'; */

const server = 'http://clinica-env.eba-tcaixkh2.sa-east-1.elasticbeanstalk.com'

function showError(err) {
    Alert.alert('Erro na conexão.', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Success!', msg)
}

export { server, showError, showSuccess }