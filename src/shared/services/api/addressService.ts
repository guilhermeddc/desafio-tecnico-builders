import {apiBigDataCloud} from '../axiosConfig';

export interface IAddress {
  locality: string;
  principalSubdivision: string;
}

const getAddress = async (
  lat: number,
  lon: number,
): Promise<IAddress | null> => {
  try {
    if (lat && lon) {
      const {data: response} = await apiBigDataCloud.get<IAddress>(
        `reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt_br`,
      );

      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Erro ao carregar dados da API');
  }
};

export const addressService = {getAddress};
