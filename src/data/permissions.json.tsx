export const permissionCreate = [
    {
        id: 'instituicao',
        show: true,
        profile: ['instituicao']
    },
    {
        id: 'secretaria',
        show: true,
        profile: ['medico','instituicao','secretaria']
    },
    {
        id: 'medico',
        show: true,
        profile: ['medico','instituicao']
    },
    {
        id: 'paciente',
        show: true,
        profile: ['medico','instituicao','secretaria']
    },
];