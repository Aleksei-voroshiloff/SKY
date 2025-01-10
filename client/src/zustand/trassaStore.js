import axiosInstance from '../api/axiosInstance';
import { create } from 'zustand';
export const useTrassaStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  trassas: [],
  getTrassas: (url) => {
    axiosInstance(url)
      .then(({ data }) => {
        set({ trassas: data });
      })
      .catch((error) => console.log(error))
      .finally(() => set({ trassasLoading: false }));
  },
  deleteTrassa: (id) => {
    axiosInstance
      .delete(`/trassa/${id}`)
      .then(({ data }) => {
        set((state) => ({ trassas: state.trassas.filter((trassa) => trassa.id !== id) }));
      })
      .catch((error) => console.log(error));
  },
  updateTrassa:(id, updatedTrassa, ) => {

    console.log(updatedTrassa, id);
    axiosInstance
      .put(`/trassa/${id}`, updatedTrassa)
      .then(({ data }) => {
        set((state) => ({
          trassas: state.trassas.map((trassa) => (trassa.id === id ? data : trassa)),
        }));
      })
      .catch((error) => console.log(error));
  },
}));
