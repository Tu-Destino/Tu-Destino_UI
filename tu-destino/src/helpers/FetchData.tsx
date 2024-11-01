const API_BASE_URL = "https://bl-monolith-td.onrender.com/TD/api/v1"; // Reemplaza con tu URL de la API

// Función genérica para obtener todos los datos
export const getAll = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Error al obtener los datos de ${endpoint}`);
  }
  return response.json();
};

// Función genérica para obtener datos por ID
export const getById = async (endpoint: string, id: string | number) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error(`Error al obtener los datos de ${endpoint} con ID ${id}`);
  }
  return response.json();
};

// Función genérica para crear datos (objeto o lista de objetos)
export const create = async (endpoint: string, data: any | any[]) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al crear datos en ${endpoint}`);
  }
  return response.json();
};

// Función genérica para actualizar datos
export const update = async (
  endpoint: string,
  id: string | number,
  data: any
) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al actualizar datos de ${endpoint} con ID ${id}`);
  }
  return response.json();
};

// Función genérica para eliminar datos
export const remove = async (endpoint: string, id: string | number) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Error al eliminar datos de ${endpoint} con ID ${id}`);
  }
  return response.json();
};
