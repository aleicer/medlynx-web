import axios from 'axios'

export async function getAIMedicineInfo(search) {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_MEDLYNX_BACKEND}/client-ai/gemini?medicineName=${search.medicineName}&invimaNumber=${search.invima}&activeIngredient=${search.activeIngredient}`)
}
