// import * as React from 'react';
// import { DataGrid, GridColDef, GridRenderCellParams, GridRowModel, GridValueGetterParams } from '@mui/x-data-grid';
// import Organization from "../../model/Organization";
// import { useAppDispatch } from "../../app/hooks";
// import { removeOrganization } from "../../app/slices/organizationtSlice";
// import { Box, Button } from  "@mui/material";

// interface OrganizationProps {
//   organization: Organization[];
//   onOrganizationUpdate: (id: string) => void;
// }

// const OrganizationTable: React.FC<OrganizationProps> = (props) => {
    
//     const createTableData = (data: Organization[]) => {
//         const results: any = [];
//         let newArray:any =[];
//         for(var i in data) {
//             newArray = data[i];
//             if (data[i].position) {
//                 newArray.latitude = data[i].position.latitude; 
//                 newArray.longitude = data[i].position.longitude; 
//                 newArray.altitude = data[i].position.altitude; 
//                 delete newArray.position;
//             }; 
//             if (data[i].telecom) {
//                 newArray.telefone = data[i].telecom.find((item : any) => item.system =='phone'); 
//                 newArray.celular =  data[i].telecom.find((item : any) => item.system =='mobile'); 
//                 newArray.email =  data[i].telecom.find((item : any) => item.system =='email'); 
//                 delete newArray.telecom;
//             }; 
//             if (data[i].hoursOfOperation) {
//                 newArray.allDay = data[i].hoursOfOperation.allDay; 
//                 newArray.closingTime = data[i].hoursOfOperation.closingTime; 
//                 newArray.openingTime = data[i].hoursOfOperation.openingTime;
//                 newArray.daysOfWeek = data[i].hoursOfOperation.daysOfWeek;
//                 delete newArray.hoursOfOperation;
//             };           
//             results.push(newArray);
//         }
//         return [ results ];
//     };

//     const dispatch = useAppDispatch();
//     let organizationList = createTableData(props.organization);

//     const setUpdatePage = (id: string) => {
//         props.onOrganizationUpdate(id);
//     };
//     const setRemoveOrganization = (id: string) => {
//         dispatch(removeOrganization({id: id}))//.then(() => organization = createTableData(props.organization));
//     };

//     // const renderActions = (params: any) => {
//     //     return (
//     //         <div>
//     //             <Button
//     //                 variant="contained"
//     //                 color="primary"
//     //                 size="small" 
//     //                 onClick={() => setUpdatePage(params.row.organization_Id)}
//     //             >
//     //                Editar
//     //             </Button>            
//     //             <Button
//     //                 variant="contained"
//     //                 color="primary"
//     //                 size="small"
//     //                 style={{ marginLeft: 16 }}
//     //                 onClick={() => setRemoveOrganization(params.row.organization_Id)}
//     //             >
//     //                 Remover
//     //             </Button>
//     //         </div>
//     //     )
//     // }

//     const columns: GridColDef[] = [
//         { field: 'id', headerName: 'ID', width: 70 },
//         { field: 'name', headerName: 'Razão social', width: 130 },
//         { field: 'alias', headerName: 'Nome fantasia', width: 130 },
//         // { field: 'telecom', headerName: 'Contatos', width: 130, sortable: false,
//         //     description: 'Contatos',       
//         //     valueGetter: (params: GridValueGetterParams) => {
//         //         let contatos = '';
//         //         for (var item of params.row.telecom)            
//         //             contatos += `${item.value} <br>`           
//         //         return contatos;
//         //     }        
//         // },
//         // { field: 'actions', headerName: '', width: 130, sortable: false,
//         // description: 'Ações', renderCell: (params: GridRenderCellParams<any>) => renderActions(params) }
//     ];

//     const rows:GridRowModel = organizationList;
   
//   return (
//     <div style={{ width: '100%' }}>
//     {/*    <DataGrid
//          rows={rows}
//          columns={columns}
//          pageSize={5}
//          rowsPerPageOptions={[10]}
//          checkboxSelection
//        /> */}
//     </div>
//   );
// }

// export default OrganizationTable;
