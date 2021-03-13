import { ProductsProvider, useProducts } from '../../hooks/useProducts';
import { renderHook, act } from '@testing-library/react-hooks';



describe('useProducts', () => {
  it('should be able to return all the products', () => {
    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    expect(result.current.products.length).toBe(9)
  })

  it('should be able to order by asc price', async () => {


    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products } = result.current;

    act(()=> orderBy('asc-price'))

    const thisFirstIsCheaper = products[0].price < products[products.length -1 ].price;

    expect(thisFirstIsCheaper).toBe(true);
  })

  it('should be able to order by desc price', async () => {


    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products } = result.current;

    act(()=> orderBy('desc-price'))

    const thisFirstIsMoreExpensive = products[0].price > products[products.length -1 ].price;

    expect(thisFirstIsMoreExpensive).toBe(true);
  })

  it('should be able to order by asc popularity', async () => {
    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products } = result.current;

    act(()=> orderBy('asc-popularity'))

    const thisFirstIsLessPopular = products[0].score < products[products.length -1 ].score;

    expect(thisFirstIsLessPopular).toBe(true);
  })

  it('should be able to order by desc popularity', async () => {
    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products } = result.current;

    act(()=> orderBy('desc-popularity'))

    const thisFirstIsMorePopular = products[0].score > products[products.length -1 ].score;

    expect(thisFirstIsMorePopular).toBe(true);
  })

  it('should be able to order by asc alphabetical order', async () => {
    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products } = result.current;

    act(()=> orderBy('asc-alphabeticalOrder'))

    const firstProduct = products[0];
    const lastProduct = products[products.length-1 ]

    const comesFirstInAlphabet = (
      firstProduct.name.localeCompare(lastProduct.name, 'en', { sensitivity: 'base' })
    );

    expect(comesFirstInAlphabet === -1).toBe(true);
  })

  it('should be able to order by desc alphabeticalOrder', async () => {
    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products } = result.current;

    act(()=> orderBy('desc-alphabeticalOrder'))

    const firstProduct = products[0];
    const lastProduct = products[products.length-1 ]

    const firstcomesLastInAlphabet = (
      firstProduct.name.localeCompare(lastProduct.name, 'en', { sensitivity: 'base' })
    );

    expect(firstcomesLastInAlphabet === 1).toBe(true);
  })

  it('should be able to update new products', async () => {
    const { result } = renderHook(()=> useProducts(), {
      wrapper: ProductsProvider
    });

    const { orderBy, products, updateProducts } = result.current;

    act(()=> orderBy('desc-alphabeticalOrder'))

    act(()=> updateProducts(products))
  })
})
