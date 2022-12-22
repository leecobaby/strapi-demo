/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import { nanoid } from "nanoid";
import pluginId from "../../pluginId";
import { Layout, BaseHeaderLayout, ContentLayout } from "@strapi/design-system";

import { EmptyStateLayout } from "@strapi/design-system";
import { Button } from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import { Illo } from "../../components/Illo";

import TodoModal from "../../components/TodoModal";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";

const HomePage: React.FC = () => {
  const [todoData, setTodoData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id, data) {
    alert("Add Edit Todo in API");
  }
  return (
    <Layout>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="This is the home page of the todo plugin"
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </Layout>
  );
};

export default HomePage;
