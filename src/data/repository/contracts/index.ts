import { ProductTypes } from "../../datasource/contracts"

export interface ProductRepositoryTypes {
  error: null,
  result: boolean
}

export interface ProductRepositoryDiferentTypes {
  error: null,
  result: ProductTypes
}

export interface ProductRepositoryDiferentAllTypes {
  error: null,
  result: ProductTypes[] | null
}