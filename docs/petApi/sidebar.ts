import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petApi/swagger-petstore-openapi-3-0",
    },
    {
      type: "category",
      label: "pet",
      items: [
        {
          type: "doc",
          id: "petApi/update-pet",
          label: "Update an existing pet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petApi/add-pet",
          label: "Add a new pet to the store",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petApi/find-pets-by-status",
          label: "Finds Pets by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/find-pets-by-tags",
          label: "Finds Pets by tags",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/get-pet-by-id",
          label: "Find pet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/update-pet-with-form",
          label: "Updates a pet in the store with form data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petApi/delete-pet",
          label: "Deletes a pet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "petApi/upload-file",
          label: "uploads an image",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "store",
      items: [
        {
          type: "doc",
          id: "petApi/get-inventory",
          label: "Returns pet inventories by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/place-order",
          label: "Place an order for a pet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petApi/get-order-by-id",
          label: "Find purchase order by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/delete-order",
          label: "Delete purchase order by ID",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "petApi/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petApi/create-users-with-list-input",
          label: "Creates list of users with given input array",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "petApi/login-user",
          label: "Logs user into the system",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/logout-user",
          label: "Logs out current logged in user session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/get-user-by-name",
          label: "Get user by user name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petApi/update-user",
          label: "Update user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "petApi/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
