import { Alert, Platform } from "react-native";

function showError(err) {
    Alert.alert('Erro.', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Success!', msg)
}

export { showError, showSuccess }