import {
  DeleteRequest,
  GetRequest,
  PostRequest,
  PutRequest,
} from "@/lib/axios/axios";
//   restaurants/2302/menus/4
export const createMenu = async (
  data: {
    restaurantId: number;
    menuId: number;
    body: any;
  },
  token: string
) => {
  try {
    const response = await PostRequest(
      `/api/restaurants/${data.restaurantId}/menus/${data.menuId}`, // change how the id is obtained when menu is created
      { data: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getAllMenus = async (token: string) => {
  try {
    const response = await GetRequest(
      `/api/menus`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getMenuDetail = async (id: number, token: string) => {
  try {
    const response = await GetRequest(
      `/api/menus/${id}`,
      {
        MenuId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
export const getRestaurantMenuDetail = async (
  restaurantId: number,
  token: string
) => {
  try {
    const response = await GetRequest(
      `/api/menus/${restaurantId}`,
      {
        restaurantId: restaurantId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const updateMenu = async (
  data: {
    restaurantId: number;
    menuId: number;
    body: any;
  },
  token: string
) => {
  try {
    const response = await PutRequest(
      `/api/restaurants/${data.restaurantId}/menus/${data.menuId}`,
      { data: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const deleteMenu = async (id: number, token: string) => {
  try {
    const response = await DeleteRequest(`/api/menus/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
