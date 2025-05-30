import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";

import { styles } from "./addStyles.js";
import { getItems, addItem, updateItem, deleteItem } from "../../Service.js";

// import { addItem } from "src/componentes/add.js"; // 🚨 Importa a função de adicionar

const Add = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [posicao, setPosicao] = useState("");
  const [selecao, setSelecao] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAdd = async () => {
    const novaFigurinha = {
      nome_jogador: nome,
      numero,
      posicao,
      selecao,
      url_imagem: imageUrl,
    };

    try {
      await addItem(novaFigurinha);
      Alert.alert("Sucesso", "Card adicionado com sucesso!");
      navigation.goBack(); // Volta para a tela anterior (listagem)
    } catch (error) {
      console.error("Erro ao adicionar card:", error);
      Alert.alert("Erro", "Não foi possível adicionar o card.");
    }
  };

  return (
    <ImageBackground
      source={require("../imagens/fundo202.jpg")}
      style={[styles.background, { backgroundColor: "#123456" }]}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Adicionar Card</Text>

        <Image source={require("../imagens/futo.png")} style={styles.icon} />

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome do Jogador</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder=""
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            value={numero}
            onChangeText={setNumero}
            placeholder=""
            placeholderTextColor="#fff"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Posição</Text>
          <TextInput
            style={styles.input}
            value={posicao}
            onChangeText={setPosicao}
            placeholder=""
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Seleção</Text>
          <TextInput
            style={styles.input}
            value={selecao}
            onChangeText={setSelecao}
            placeholder=""
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>URL da Imagem</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={setImageUrl}
            placeholder=""
            placeholderTextColor="#fff"
          />
        </View>

        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.previewImage}
            resizeMode="contain"
          />
        ) : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>LISTAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Add;
