import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import styles from "./editStyles.js";
import { getItems, addItem, updateItem, deleteItem } from "../../Service.js";

// import { updateItem } from "../service/service"; 

export default function Edit({ route, navigation }) {
  const { card } = route.params;

  const [nome, setNome] = useState(card.nome_jogador);
  const [selecao, setSelecao] = useState(card.selecao);
  const [numero, setNumero] = useState(String(card.numero));
  const [posicao, setPosicao] = useState(card.posicao);
  const [imageUrl, setImageUrl] = useState(card.url_imagem);

  const handleSalvar = async () => {
    const dadosAtualizados = {
      nome_jogador: nome,
      selecao,
      numero,
      posicao,
      url_imagem: imageUrl,
    };

    try {
      await updateItem(card.id, dadosAtualizados); // ✅ Atualiza via API
      Alert.alert("Sucesso", "Card atualizado com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar card:", error);
      Alert.alert("Erro", "Não foi possível atualizar o card.");
    }
  };

  return (
    <ImageBackground
      source={require("../imagens/fundo202.jpg")}
      style={[styles.background, { backgroundColor: "#123456" }]}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.titulo}>Editar</Text>

            {imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.imagem} />
            ) : null}

            <Text style={styles.label}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome do jogador"
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Seleção:</Text>
            <TextInput
              style={styles.input}
              value={selecao}
              onChangeText={setSelecao}
              placeholder="Seleção"
              placeholderTextColor="#999"
            />

            <View style={styles.linha}>
              <View style={styles.coluna}>
                <Text style={styles.label}>Número:</Text>
                <TextInput
                  style={styles.inputMenor}
                  value={numero}
                  onChangeText={setNumero}
                  keyboardType="numeric"
                  placeholder="Nº"
                  placeholderTextColor="#999"
                />
              </View>
              <View style={styles.coluna}>
                <Text style={styles.label}>Posição:</Text>
                <TextInput
                  style={styles.inputMenor}
                  value={posicao}
                  onChangeText={setPosicao}
                  placeholder="Ex: ZG"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            <Text style={styles.label}>URL da Imagem:</Text>
            <TextInput
              style={styles.input}
              value={imageUrl}
              onChangeText={setImageUrl}
              placeholder="https://..."
              placeholderTextColor="#999"
            />

            <View style={styles.botoes}>
              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.botaoTexto}>VOLTAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
                <Text style={styles.botaoTexto}>SALVAR</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
  
}
