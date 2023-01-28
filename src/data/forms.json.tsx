
import OrganizationForm from "../components/login/forms/organization-form.component";
import MedicoForm from "../components/login/forms/medico-form.component";
import PacienteForm from "../components/login/forms/paciente-form.component";
import SecretariaForm from "../components/login/forms/secretaria-form.component";
import { selectForm } from "../types/auth";

export const tiposCadastro: selectForm[] = [
    {
        id: "secretaria-form",
        name: "Secretária(o)",
        visible: false,
        component: SecretariaForm
    },
    {
        id: "paciente-form",
        name: "Paciente",
        visible: false,
        component: PacienteForm
    },
    {
        id: "medico-form",
        name: "Médico",
        visible: false,
        component: MedicoForm
    },
    {
        id: "organization-form",
        name: "Instituição",
        visible: false,
        component: OrganizationForm
    },
];