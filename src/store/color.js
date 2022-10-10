import axios from 'axios';
import produce from 'immer';
import create from 'zustand';

const initialColors = [];

const useColorStore = create((set) => ({
  colors: initialColors,
  fetchColors: async () => {
    const { data: axiosData } = await axios.get(`https://reqres.in/api/colors`);
    
    set(produce((state) => {
        state.colors = axiosData.data;
    }))
  }
}));

// selector bisa dibuat di sini, biar bisa reusesable
export const selectColors = (state) => state.colors;
export const selectFetchColors = (state) => state.fetchColors;

export default useColorStore;
