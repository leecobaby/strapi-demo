import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::to-do.todo", query);
  },
  async delete(id) {
    return await strapi.entityService.delete("plugin::to-do.todo", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::to-do.todo", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::to-do.todo", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::to-do.todo", id);

    return await strapi.entityService.update("plugin::to-do.todo", id, {
      data: { isDone: !result.isDone },
    });
  },
});
