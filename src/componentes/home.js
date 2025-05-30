import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";

import fundo2002 from "../imagens/fundo202.jpg";
import lapisIcon from "../imagens/lapis.png";
import lixeiraIcon from "../imagens/lixeira.png";

import styles from "./homeStyles";
import { getItems, addItem, updateItem, deleteItem } from '../../Service';

const { width, height } = Dimensions.get("window");
const CARD_W = width * 0.9;
const CARD_H = height * 0.63;

const fonteEstiloJaro = Platform.OS === "ios" ? "Chalkboard SE" : "casual";

export default function Home({ navigation }) {
  const [cards, setCards] = useState([]);

  const carregarCards = async () => {
    try {
      const data = await getItems();
      setCards(data);
    } catch (error) {
      console.error("Erro ao buscar cards:", error);
      Alert.alert("Erro", "Não foi possível carregar os cards.");
    }
  };

  useEffect(() => {
    carregarCards(); // primeira vez
    const unsubscribe = navigation.addListener("focus", carregarCards);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id) => {
    Alert.alert("Confirmar", "Tem certeza que deseja excluir este card?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteItem(id);
            carregarCards(); // Atualiza lista
          } catch (error) {
            console.error("Erro ao excluir:", error);
            Alert.alert("Erro", "Não foi possível excluir o card.");
          }
        },
      },
    ]);
  };

  return (
    <ImageBackground
      source={fundo2002}
      style={styles.background}
      imageStyle={{ borderRadius: 30 }}
    >
      <SafeAreaView style={styles.safe}>
        <Text style={[styles.title, { fontFamily: fonteEstiloJaro }]}>
          Coleção
        </Text>

        <View style={[styles.card, { width: CARD_W, height: CARD_H }]}>
          <ScrollView
            style={styles.listContainer}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            {cards.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text
                  style={[styles.emptyText, { fontFamily: fonteEstiloJaro }]}
                >
                  Nenhum card adicionado
                </Text>
              </View>
            ) : (
              cards.map((card, index) => (
                <View key={card.id || index} style={styles.cardItem}>
                  <Image
                    source={{ uri: card.url_imagem }}
                    style={styles.cardImage}
                  />
                  <View style={{ flex: 1, paddingHorizontal: 8 }}>
                    <Text style={styles.cardText}>
                      <Text style={{ fontWeight: "bold" }}>Nome:</Text>{" "}
                      {card.nome_jogador}
                    </Text>
                    <Text style={styles.cardText}>
                      <Text style={{ fontWeight: "bold" }}>Número:</Text>{" "}
                      {card.numero}
                    </Text>
                    <Text style={styles.cardText}>
                      <Text style={{ fontWeight: "bold" }}>Posição:</Text>{" "}
                      {card.posicao}
                    </Text>
                    <Text style={styles.cardText}>
                      <Text style={{ fontWeight: "bold" }}>Seleção:</Text>{" "}
                      {card.selecao}
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Edit", { card })}
                    >
                      <Image
                        source={lapisIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDelete(card.id)}
                      style={{ marginTop: 10 }}
                    >
                      <Image
                        source={lixeiraIcon}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        </View>

        <View style={styles.fabBackground}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("Add")}
          >
            <Text style={{ fontSize: 37, color: "#fff", marginTop: -4 }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
