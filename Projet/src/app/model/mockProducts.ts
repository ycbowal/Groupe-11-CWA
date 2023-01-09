import { Product } from './product';
import { Client } from './client';
const Image: string[] = [
  './assets/Products/HUAWEI.avif',
  './assets/Products/IPHONE14.avif',
  './assets/Products/PCASUS.avif',
  './assets/Products/PCDELL.avif',
  './assets/Products/PCMSI.avif',
  './assets/Products/SAMSUNGS22.webp',
  './assets/Products/SonyXperiaZ.jpg',
  './assets/Products/XPERIA.avif',
];

export const MockProducts: Product[] = [
  new Product(
    '1',
    'huawei',
    '----',
    500,
    2,
    Image[0],
    [],
    'SMARTPHONE',
    [],
    0,
    true,
    0,
    true
  ),
  new Product(
    '2',
    'iphone14',
    '----',
    500,
    2,
    Image[1],
    [],
    'SMARTPHONE',
    [],
    0,
    true,
    0,
    true
  ),
  new Product(
    '3',
    'asus',
    '----',
    500,
    2,
    Image[2],
    [],
    'PC',
    [],
    0,
    false,
    0,
    false
  ),
  new Product(
    '4',
    'dell',
    '----',
    500,
    2,
    Image[3],
    [],
    'PC',
    [],
    0,
    true,
    0,
    true
  ),
  new Product(
    '5',
    'MSI',
    '----',
    500,
    2,
    Image[4],
    [],
    'PC',
    [],
    0,
    false,
    0,
    false
  ),
   
];
