import axios from 'axios';
import {apiCall} from '.';

// use fake timers to run async task call
// alternatively, we can create a file with jest.useFakeTimers()
// and modify the configuration in package.json OR jest.config.js
// by just adding "setupFiles": [ "<rootDir>/path_to_your_setup_file" ]
jest.useFakeTimers();

// You can mock the function to return value as below
// here we use the common example of mocking API calls with axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.runAllTimers();

test('#1 Mock Axios Resolve', async () => {
  const resolveData = {
    data: {
      result: 'success',
    },
  };

  mockedAxios.request.mockImplementation(() => Promise.resolve(resolveData));

  const result = await apiCall();

  expect(mockedAxios.request).toHaveBeenCalled();
  expect(result).toBe(resolveData);
});
