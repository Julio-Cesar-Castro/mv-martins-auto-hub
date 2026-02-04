export interface Car {
  id: number;
  name: string;
  model: string;
  brand: string;
  year: number;
  version: string;
  doors: number;
  fuel: string;
  km: number;
  plate: string;
  color: string;
  transmission: string;
  armored: boolean;
  price: number;
  images: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Honda Civic",
    model: "Civic",
    brand: "Honda",
    year: 2023,
    version: "Touring 1.5 Turbo",
    doors: 4,
    fuel: "Gasolina",
    km: 15000,
    plate: "ABC-1234",
    color: "Preto",
    transmission: "Automático",
    armored: false,
    price: 165000,
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    ]
  },
  {
    id: 2,
    name: "Toyota Corolla",
    model: "Corolla",
    brand: "Toyota",
    year: 2024,
    version: "XEi 2.0 Flex",
    doors: 4,
    fuel: "Flex",
    km: 8000,
    plate: "DEF-5678",
    color: "Branco",
    transmission: "Automático",
    armored: false,
    price: 145000,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800"
    ]
  },
  {
    id: 3,
    name: "BMW 320i",
    model: "Série 3",
    brand: "BMW",
    year: 2022,
    version: "Sport GP",
    doors: 4,
    fuel: "Gasolina",
    km: 25000,
    plate: "GHI-9012",
    color: "Cinza",
    transmission: "Automático",
    armored: true,
    price: 285000,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=800",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800"
    ]
  },
  {
    id: 4,
    name: "Mercedes C200",
    model: "Classe C",
    brand: "Mercedes-Benz",
    year: 2023,
    version: "Avantgarde",
    doors: 4,
    fuel: "Gasolina",
    km: 12000,
    plate: "JKL-3456",
    color: "Prata",
    transmission: "Automático",
    armored: true,
    price: 320000,
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800"
    ]
  },
  {
    id: 5,
    name: "Jeep Compass",
    model: "Compass",
    brand: "Jeep",
    year: 2024,
    version: "Limited T270",
    doors: 4,
    fuel: "Flex",
    km: 5000,
    plate: "MNO-7890",
    color: "Verde",
    transmission: "Automático",
    armored: false,
    price: 195000,
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800",
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800"
    ]
  },
  {
    id: 6,
    name: "Volkswagen Tiguan",
    model: "Tiguan",
    brand: "Volkswagen",
    year: 2023,
    version: "Allspace R-Line",
    doors: 4,
    fuel: "Gasolina",
    km: 18000,
    plate: "PQR-1234",
    color: "Azul",
    transmission: "Automático",
    armored: false,
    price: 245000,
    images: [
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800"
    ]
  },
  {
    id: 7,
    name: "Audi A4",
    model: "A4",
    brand: "Audi",
    year: 2022,
    version: "Performance Black",
    doors: 4,
    fuel: "Gasolina",
    km: 30000,
    plate: "STU-5678",
    color: "Preto",
    transmission: "Automático",
    armored: false,
    price: 275000,
    images: [
      "https://images.unsplash.com/photo-1606664466690-f1bb276a7885?w=800",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
    ]
  },
  {
    id: 8,
    name: "Hyundai HB20",
    model: "HB20",
    brand: "Hyundai",
    year: 2024,
    version: "Platinum 1.0 TGDI",
    doors: 4,
    fuel: "Flex",
    km: 3000,
    plate: "VWX-9012",
    color: "Vermelho",
    transmission: "Automático",
    armored: false,
    price: 95000,
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ]
  },
  {
    id: 9,
    name: "Luiza",
    model: "Julio",
    brand: "Nos dois",
    year: 2026,
    version: "Premium 1.0",
    doors: 4,
    fuel: "Flex",
    km: 3000,
    plate: "VWX-9012",
    color: "Vermelho",
    transmission: "Manual",
    armored: false,
    price: 95000,
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ]
  }
];

export const brands = [...new Set(cars.map(car => car.brand))];
export const colors = [...new Set(cars.map(car => car.color))];
export const fuels = [...new Set(cars.map(car => car.fuel))];
export const transmissions = [...new Set(cars.map(car => car.transmission))];
export const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
export const doors = [...new Set(cars.map(car => car.doors))].sort((a, b) => a - b);
