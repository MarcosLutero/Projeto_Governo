import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
  addIcon: {
    color: '#fff', // ícone branco sobre o fundo azul
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#0da3df',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0da3df',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    width: "100%",
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputIcon: {
    marginRight: 10,
  },
  inputIconSelect: {
    marginRight: 10,
    marginLeft:10
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0da3df',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    backgroundColor: '#0da3df',
  },
  radioText: {
    fontSize: 16,
  },
  
  error: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#0da3df',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
