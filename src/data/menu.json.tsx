import EventIcon from '@mui/icons-material/Event';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupsIcon from '@mui/icons-material/Groups';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { RenderTree } from '../interfaces/treeview';

export const menuItens: RenderTree[] = [
    {
        id: 'agenda-menu',
        name: 'Agenda',
        icon: EventIcon,
        page: '/agenda'
    },
    {
        id: 'secretaria-menu',
        name: 'Secretárias',
        icon: SupportAgentIcon,
        page: '/secretaria'
    },
    {
        id: 'medico-menu',
        name: 'Médicos',
        icon: GroupsIcon,
        page: '/medico'
    },
    {
        id: 'organization-menu',
        name: 'Instituição',
        icon: AddBusinessIcon,
        page: '/instituicao'
    },
    {
        id: 'servico-menu',
        name: 'Serviços',
        icon: MedicalInformationIcon,
        page: '/servico'
    },
    {
        id: 'pagamento-menu',
        name: 'Pagamento',
        icon: CreditCardIcon,
        page: '/pagamento'
    },
    {
        id: 'perfil-menu',
        name: 'Menus dados',
        icon: LocalHospitalIcon,
        page: '/login'
    },    
    //   {
    //     id: '2',
    //     name: 'Child - 3',
    //     children: [
    //       {
    //         id: '4',
    //         name: 'Child - 4',
    //       },
    //     ],
    //   },
];