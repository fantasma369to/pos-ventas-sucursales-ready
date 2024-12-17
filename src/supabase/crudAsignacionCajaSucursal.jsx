import { supabase } from "../supabase/supabase.config";
const tabla = "asignacion_sucursal";
export async function MostrarSucursalCajaAsignada(p) {
  const { data } = await supabase
    .from(tabla)
    .select(`*, sucursales(*)`)
    .eq("id_usuario", p.id_usuario)
    .maybeSingle();
    return data;
}
