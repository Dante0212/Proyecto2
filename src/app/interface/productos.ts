import { NonNullableFormBuilder } from "@angular/forms";

export interface Productos {
  id: Number,
  tittle: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: String[]

}


