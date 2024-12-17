import { create } from "zustand";
import { MostrarCajaXSucursal,InsertarCaja,EditarCaja,EliminarCaja } from "../supabase/crudCaja";
export const useCajasStore = create((set) => ({
  stateCaja: false,
  setStateCaja: (p) => set({ stateCaja: p }),
  accion: "",
  setAccion: (p) => set({ accion: p }),
  cajaSelectItem: [],
  setCajaSelectItem: (p) => {
    set({ cajaSelectItem: p });
  },
  
  dataCaja: null,
  mostrarCajaXSucursal: async (p) => {
    const response = await MostrarCajaXSucursal(p);
    set({ dataCaja: response });
    return response;
  },
  insertarCaja: async (p) => {
    await InsertarCaja(p);
  },
  editarCaja: async (p) => {
    await EditarCaja(p);
  },
  eliminarCaja: async (p) => {
    await EliminarCaja(p);
  },
}));

