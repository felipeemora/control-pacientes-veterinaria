import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import { PatentDetailItem } from "./PatentDetailItem"

type PatientDetailsProps = {
  patient: Patient
}

export const PatientDetails = ({patient}: PatientDetailsProps) => {

  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast('Paciente Eliminado', { type: 'error' });
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatentDetailItem label="id" data={patient.id} />
      <PatentDetailItem label="nombre" data={patient.name} />
      <PatentDetailItem label="propietario" data={patient.caretaker} />
      <PatentDetailItem label="email" data={patient.email} />
      <PatentDetailItem label="fecha alta" data={patient.date.toString()} />
      <PatentDetailItem label="sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row justify-evenly mt-10 space-y-3 lg:space-y-0">
        <button
          type="button"
          onClick={() => getPatientById(patient.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
        <button
          type="button"
          onClick={() =>handleClick()}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  )
}
