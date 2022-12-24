import { request } from "@strapi/helper-plugin";

export const todoRequests = {
  getAllTodos: async () => {
    return await request("/to-do/find", { method: "GET" });
  },
  addTodo: async (data) => {
    return await request(`/to-do/create`, {
      method: "POST",

      body: { data: data },
    });
  },

  toggleTodo: async (id) => {
    return await request(`/to-do/toggle/${id}`, {
      method: "PUT",
    });
  },

  editTodo: async (id, data) => {
    return await request(`/to-do/update/${id}`, {
      method: "PUT",

      body: { data: data },
    });
  },

  deleteTodo: async (id) => {
    return await request(`/to-do/delete/${id}`, {
      method: "DELETE",
    });
  },
};
