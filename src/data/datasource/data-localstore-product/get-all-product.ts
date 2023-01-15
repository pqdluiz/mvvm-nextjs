interface ProductTypes {
  id: string;
  name: string;
  price: string;
}

interface GetAllTypes {
  error: null;
  result: ProductTypes[] | null;
}

const COLLECTION = "PRODUCTS";

export function getAll(): Promise<GetAllTypes> {
  try {
    let data: ProductTypes[] = [];
    let dataString = window.localStorage.getItem(COLLECTION);

    if (dataString !== null) {
      data = JSON.parse(dataString);
    }

    return Promise.resolve({ error: null, result: data });
  } catch (err: any) {
    return Promise.resolve({ error: err.message, result: null });
  }
}
