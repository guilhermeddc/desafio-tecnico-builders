import {QueryClient, QueryClientProvider} from 'react-query';

import {screen, render, waitFor} from '@testing-library/react';
import {useFetchData} from 'shared/hooks';
import {convertFahrenheitToCelsius} from 'shared/utils/convertFahrenheitToCelsius';
import {convertMilesToKilometers} from 'shared/utils/convertMilesToKilometers';

import Home from '.';

jest.mock('shared/hooks', () => ({
  useFetchData: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    useFetchData.mockImplementation(() => ({}));
  });

  describe('while loading', () => {
    it('renders a loader', async () => {
      const queryClient = new QueryClient();

      const mockGeolocation = {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
          Promise.resolve(
            success({
              coords: {
                latitude: 51.1,
                longitude: 45.3,
              },
            }),
          ),
        ),
      };

      global.navigator.geolocation = mockGeolocation;

      useFetchData.mockImplementation(() => ({
        isLoading: true,
      }));

      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>,
      );

      const title = screen.getByText('☀️ Desafio Técnico');
      const subtitle = screen.getByText('Builders');

      await waitFor(() => {
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
      });
    });
  });

  describe('with an error', () => {
    it('renders an error message', async () => {
      const queryClient = new QueryClient();

      const mockGeolocation = {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
          Promise.resolve(
            success({
              coords: {
                latitude: 51.1,
                longitude: 45.3,
              },
            }),
          ),
        ),
      };

      global.navigator.geolocation = mockGeolocation;

      useFetchData.mockImplementation(() => ({
        isLoading: false,
        isError: true,
        error: {message: 'Erro ao carregar dados da API'},
      }));

      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>,
      );

      const errorMessage = screen.getByText('Erro ao carregar dados da API');

      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe('with data', () => {
    it('renders for getting data', async () => {
      const queryClient = new QueryClient();

      const mockGeolocation = {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
          Promise.resolve(
            success({
              coords: {
                latitude: 51.1,
                longitude: 45.3,
              },
            }),
          ),
        ),
      };

      global.navigator.geolocation = mockGeolocation;

      useFetchData.mockImplementation(() => ({
        isLoading: false,
        data: {
          address: {
            locality: 'Nossa Senhora do Rosário, Santa Maria',
            principalSubdivision: 'Rio Grande do Sul',
          },
          weather: {
            weather: [
              {
                description: 'algumas nuvens',
              },
            ],
            main: {
              temp: 292.84,
              humidity: 52,
            },
            wind: {speed: 6.69},
            sys: {
              country: 'BR',
            },
            name: 'Santa Maria',
          },
        },
      }));

      const {container} = render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>,
      );

      await waitFor(() => {
        expect(container.innerHTML).toMatch(
          'Nossa Senhora do Rosário, Santa Maria, Rio Grande do Sul/BR',
        );
        expect(container.innerHTML).toMatch('algumas nuvens');
        expect(container.innerHTML).toMatch(convertMilesToKilometers(6.69));
        expect(container.innerHTML).toMatch(convertFahrenheitToCelsius(292.84));
        expect(container.innerHTML).toMatch(new Date().toLocaleDateString());
      });
    });
  });
});
