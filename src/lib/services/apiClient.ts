import ky from 'ky';

const apiClient = ky.create({ timeout: 5 * 1000, retry: 3 });

export default apiClient;
