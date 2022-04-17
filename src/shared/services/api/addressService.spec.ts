import axiosMocked from 'axios';

import {addressService} from './addressService';

afterEach(() => {
  jest.clearAllMocks();
});

describe('addressService', () => {
  it('should return an address', async () => {
    const lat = -23.564;
    const lon = -46.633;
    const address = {
      locality: 'São Paulo',
      principalSubdivision: 'São Paulo',
    };

    jest.spyOn(axiosMocked, 'get').mockResolvedValue({data: address});

    const result = await addressService.getAddress(lat, lon);

    expect(result).toEqual(address);
  });

  it('should return null if lat or lon are not defined', async () => {
    const lat = 0;
    const lon = 0;
    const address = null;

    jest.spyOn(axiosMocked, 'get').mockResolvedValue(null);

    const result = await addressService.getAddress(lat, lon);

    expect(result).toEqual(address);
  });

  it('should throw an error if the api returns an error', async () => {
    const lat = -23.564;
    const lon = -46.633;

    jest
      .spyOn(axiosMocked, 'get')
      .mockRejectedValue(new Error('Erro ao carregar dados da API'));

    await expect(addressService.getAddress(lat, lon)).rejects.toThrow(
      'Erro ao carregar dados da API',
    );
  });
});
