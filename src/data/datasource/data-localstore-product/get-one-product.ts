import { ProductTypes } from "../contracts";

interface GetFindOneTypes {
  error: null;
  result: ProductTypes | null;
}

const COLLECTION = "PRODUCTS";

export function getOne(id: string): Promise<GetFindOneTypes> {
  try {
    let data: ProductTypes[] = [];
    let dataString = window.localStorage.getItem(COLLECTION);

    if (dataString !== null) {
      data = JSON.parse(dataString);
    }

    let filteredData = data.filter((item) => item.id === id);

    return Promise.resolve({
      error: null,
      result: filteredData.length > 0 ? filteredData[0] : null,
    });
  } catch (err: any) {
    return Promise.resolve({ error: err.message, result: null });
  }
}
