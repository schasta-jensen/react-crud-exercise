import { agendaI } from "../interfaces/agenda";
import { organizationI } from "../interfaces/organization";
import { procedureI } from "../interfaces/procedure";
import moment from 'moment'
import Organization from "../model/Organization";
import { v4 as uuidv4 } from "uuid";

export const agenda:agendaI[] = [{
    id: 1,
    type: 'Consulta',
    doctor: 'Dr. Tibério',
    patient: 'Laura de Souza',
    date: moment().set("hour", 9).set("minute", 30)
},
{
    id: 2,
    type: 'Exame',
    doctor: 'Dr. Tibério',
    procedure: 'Endoscopia',
    patient: 'Ailton',
    date: moment().set("hour", 10).set("minute", 0)
}];

export const organizationMock: organizationI[] = [{
        id: 1,
        nomeFantasia: 'Hospital Santa Catarina',
        responsavelLegal: 'Ailton',
        cnpj: '123456789',
        email: 'hsc@hsc.com.br',
        especialidade: 'Cardiologia',
        celular: '47992218844',
        address: {cep: '89020403' },
        status: 'completed'
    },
    {
        id: 2,
        nomeFantasia: 'Hospital Santo Antônio',
        responsavelLegal: 'Tamiris',
        cnpj: '123456789',
        email: 'hsa@hsa.com.br',
        especialidade: 'Pediatria',
        celular: '47992212255',
        address: {cep: '89020403' },
        schedule: [{
            diaSemana:1, 
            periodStart: moment(), 
            periodEnd: moment().add(4, 'hours')
        },
        {
            diaSemana:2, 
            periodStart: moment(), 
            periodEnd: moment().add(4, 'hours')
        }]  ,
        status: 'completed'    
    }
];

export const organizationList: Organization[] = [
    {
      organization_Id: uuidv4(),
      name: "Roger ndutiye",
      alias: "Roger",
      active: true,
      position: { altitude: 0.04, latitude: 2.25475478, longitude: -83.6945691  },
      hoursOfOperation: [
        { 
          daysOfWeek: ['mon', 'tue', 'fri'],
          allDay: false,
          openingTime: '09:00:00',
          closingTime: '16:30:00'
         }
      ],
      telecom: [ 
        {system: "email", value: "rogerndutiye@gmail.com", use: "work" },
        {system: "phone", value: "250788841494", use: "work" }
      ]
    },
    {
      organization_Id: uuidv4(),
      name: "Unimed Vale",
      alias: "Unimed Vale",
      active: true,
      position: { altitude: 0.04, latitude: 2.25475478, longitude: -83.6945691  },
      hoursOfOperation: [
        { 
          daysOfWeek: ['mon', 'tue', 'fri'],
          allDay: false,
          openingTime: '09:00:00',
          closingTime: '16:30:00'
         }
      ],
      telecom: [ 
        {system: "email", value: "unimed-vale@gmail.com", use: "work" },
        {system: "phone", value: "250788841494", use: "work" }
      ]
    },
    {
      organization_Id: uuidv4(),
      name: "Unimed Florianópolis",
      alias: "Unimed Florianópolis",
      active: true,
      position: { altitude: 0.04, latitude: 2.25475478, longitude: -83.6945691  },
      hoursOfOperation: [
        { 
          daysOfWeek: ['mon', 'tue', 'fri'],
          allDay: false,
          openingTime: '09:00:00',
          closingTime: '16:30:00'
         }
      ],
      telecom: [ 
        {system: "email", value: "unimed-floripa@gmail.com", use: "work" },
        {system: "phone", value: "250788841494", use: "work" }
      ]
    },
    {
      organization_Id: uuidv4(),
      name: "Unimed Curitiba",
      alias: "Unimed Curitiba",
      active: true,
      position: { altitude: 0.04, latitude: 2.25475478, longitude: -83.6945691  },
      hoursOfOperation: [
        { 
          daysOfWeek: ['mon', 'tue', 'fri'],
          allDay: false,
          openingTime: '09:00:00',
          closingTime: '16:30:00'
         }
      ],
      telecom: [ 
        {system: "email", value: "unimed-curitiba@gmail.com", use: "work" },
        {system: "phone", value: "250788841494", use: "work" }
      ]
    }  
  ];

export const proceduresMock: procedureI[] = [{
    id: 1,
    name: 'Endoscopia',
    duration: 30
},
{
    id: 2,
    name: 'Ultrassom',
    duration: 30
}
];


