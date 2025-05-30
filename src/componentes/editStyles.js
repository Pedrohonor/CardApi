import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 40,
    fontFamily: 'LuckiestGuy',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
    textAlign: 'center',
    padding: 50,
    marginTop: -60
  },
  imagem: {
    width: 90,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    width: '94%',
    borderWidth: 1,
    borderColor: '#8FB7FF',
    borderRadius: 10,
    padding: 12,
    backgroundColor: 'rgba(197, 217, 253, 0.69)',
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  coluna: {
    flex: 1,
    marginRight: 50,
    marginLeft: 22,
    
  },
  inputMenor: {
    backgroundColor: 'rgba(197, 217, 253, 0.69)',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 11
  },
  botoes: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  botao: {
    backgroundColor: '#8FB7FF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 100,
    marginLeft: 33,
    marginRight: 53
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: 'center',
  },
  


});
