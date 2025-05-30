const API_URL = 'https://api-card.onrender.com/api/cards'; 

// Buscar
export async function getItems() {
  try {
    const response = await fetch("https://api-card.onrender.com/api/cards"); // ajuste conforme sua API
    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Erro ao buscar cards:", error);
    return []; // Retorna array vazio em caso de erro
  }
}


// Adicionar
export async function addItem(item) {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return response.json();
}

// Atualizar
export async function updateItem(id, item) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return response.json();
}

// Deletar
export async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}
