import axios from 'axios';
import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const initialColors = [];

const useColorStore = create(
    persist(
        (set) => ({
            colors: initialColors,
            fetchColors: async () => {
                const { data: axiosData } = await axios.get(`https://reqres.in/api/colors`);

                set(produce((state) => {
                    state.colors = axiosData.data;
                }))
            },
            addColor: async (newColor) => {
                const { data } = await axios.post(`https://reqres.in/api/colors`, newColor);

                set(produce((state) => {
                    state.colors = [...state.colors, data];
                }))
            },
        }),
        {
            name: 'color-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectColors = (state) => state.colors;
export const selectFetchColors = (state) => state.fetchColors;
export const selectAddColor = (state) => state.addColor;

export default useColorStore;
