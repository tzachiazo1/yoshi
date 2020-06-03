import defaultAxios from 'axios';

export const initAPIService = async (instance: string): Promise<void> => {
  defaultAxios.defaults.headers.common.Authorization = instance;
};

export const axios = defaultAxios;
