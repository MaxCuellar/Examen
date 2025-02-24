import { Post } from "@/components/DataTable/columns";
import { useEffect, useState } from "react";

interface CacheData {
  data: Post[];
  isLoading: boolean;
  hasError: boolean;
  error: {
    code: number;
    message: string;
  };
}
const localCache: { [key: string]: CacheData } = {};

export const useFetch = (url: string) => {
  const [state, setState] = useState<CacheData>({
    data: [],
    isLoading: true,
    hasError: false,
    error: {
      code: 0,
      message: "",
    },
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: [],
      isLoading: true,
      hasError: false,
      error: {
        code: 0,
        message: "",
      },
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log("Usando cache");
      setState({
        data: localCache[url].data,
        isLoading: false,
        hasError: false,
        error: {
          code: 0,
          message: "",
        },
      });
      return;
    }

    setLoadingState();

    const response = await fetch(url);
    if (!response.ok) {
      setState({
        data: [],
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });
      return;
    }

    const data = await response.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: {
        code: response.status,
        message: response.statusText,
      },
    });

    console.log(data);

    localCache[url] = {
      data,
      isLoading: false,
      hasError: false,
      error: { code: 0, message: "" },
    };

    // // ✅ Actualizar un registro en el estado local
    // const updateItem = (updatedItem: Post) => {
    //   setState((prev) => ({
    //     ...prev,
    //     data: prev.data.map((item) =>
    //       item.id === updatedItem.id ? updatedItem : item
    //     ),
    //   }));
    // };

    // // ✅ Eliminar un registro en el estado local
    // const deleteItem = (id: string) => {
    //   setState((prev) => ({
    //     ...prev,
    //     data: prev.data.filter((item) => item.id !== id),
    //   }));
    // };

    // // ✅ Agregar un nuevo registro al estado local
    // const addItem = (newItem: Post) => {
    //   setState((prev) => ({
    //     ...prev,
    //     data: [...prev.data, newItem],
    //   }));
    // };
  };

  const refetch = () => {
    getFetch();
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    refetch,
    // updateItem,
    // deleteItem,
    // addItem,
  };
};
