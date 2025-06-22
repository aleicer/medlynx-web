import axios from 'axios'

export async function saveMedicationDB(payload) {
  return await axios.post(`${process.env.NEXT_PUBLIC_MEDLYNX_BACKEND}/medlynx/save`, payload)
}

export async function findMedicationDB(data) {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_MEDLYNX_BACKEND}/medlynx/search?expediente=${data.expediente}&consecutivocum=${data.consecutivocum}&cantidadcum=${data.cantidadcum}`,)
}
