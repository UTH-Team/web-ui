// Interface cho phản hồi API
export interface CreateProductResponse {
    message: string;
    data: ProductData;
  }
  
// Interface cho phản hồi API getAllProducts
export interface GetAllProductsResponse {
    message: string;
    data: ProductData[];
  }

  // Interface cho dữ liệu sản phẩm
  export interface ProductData {
    productId: number;
    sellerId: number;
    category: Category;
    productName: string;
    description: string;
    price: number;
    availabilityStock: number;
    status: "AVAILABLE" | "SOLD" | "UNAVAILABLE" | "BANNED";
    createdAt: string;
    attributes: Attributes;
    images: ProductImage[];
  }
  
  // Interface cho danh mục sản phẩm
  export interface Category {
    categoryId: number;
    categoryName: string;
  }
  
  // Interface cho các thuộc tính sản phẩm
export interface Attributes {
    [key: string]: string;
  }
  
  
  // Interface cho ảnh sản phẩm
  export interface ProductImage {
    productImageId: number;
    imgUrl: string;
    imagePublicId: string;
  }
  