import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addOrganization, updateOrganization } from "../../app/slices/organizationtSlice";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BsFillCursorFill } from "react-icons/bs";
import Organization from "../../model/Organization";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

type OrganizationFormData = {
  id: string | null;
  name: string;
  email: string;
  telefone: string;
  celular: string;
  alias: string;
  active: boolean;
  latitude: number;
  longitude: number;
  altitude: number;
  closingTime: string;
  openingTime: string;
  allDay: boolean;
  daysOfWeek?: Array<any>;
};
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required(),
  })
  .required();

interface NewOrganizationProps {
  id: string;
  OnDialogHandle: () => void;
}
const NewOrganization: React.FC<NewOrganizationProps> = (props: any) => {
  const id =  props.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<OrganizationFormData>({
    resolver: yupResolver(schema) as any,
  });
  console.log(id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const organizationData = useAppSelector((state) =>
    state.organization.organizationList.find((item) => item.organization_Id === id)
  );
  const email = organizationData?.telecom.find((item:any) => item.system === 'email');
  const telefone = organizationData?.telecom.find((item:any) => item.system === 'phone');
  const celular = organizationData?.telecom.find((item:any) => item.system === 'mobile');

  setValue("name", organizationData?.name || "");
  setValue("email", email?.value || '');
  setValue("celular", celular?.value || '');
  setValue("telefone", telefone?.value || '');
  setValue("alias",  organizationData?.alias || "");
  setValue("id",  organizationData?.organization_Id || null);
  setValue("active",  organizationData?.active || false);
  setValue("allDay",  organizationData?.hoursOfOperation.allDay || false);
  setValue("openingTime",  organizationData?.hoursOfOperation.openingTime || '');
  setValue("closingTime",  organizationData?.hoursOfOperation.closingTime || '');

  const createJson = (data: OrganizationFormData) => {
    const { name, email, telefone, celular, alias, active, latitude, longitude, altitude, id, allDay, closingTime, openingTime  } = data;
    const postOrganization: Organization = { 
      organization_Id: id ? id :  (Math.random() + 100).toString(),
      name: name, 
      alias: alias, 
      telecom: [
        {
          system: 'phone',
          value: telefone,
          use: 'work'
        },
        {
          system: 'email',
          value: email,
          use: 'work'
        },
        {
          system: 'mobile',
          value: celular,
          use: 'work'
        },
      ], 
      active: active, 
      hoursOfOperation: { allDay: allDay, closingTime: closingTime, openingTime: openingTime, daysOfWeek: [] }, 
      position: { altitude: altitude, longitude: longitude, latitude: latitude }, 
    };
    return postOrganization;
  }

  const onSubmit = (data: OrganizationFormData) => {   
    const postOrganization = createJson(data);
    if (id) {
      dispatch(updateOrganization(postOrganization));
      //navigate("/instituicao", {replace: true});
      props.OnDialogHandle();
      return;
    }
    dispatch(addOrganization(postOrganization));
    //history.push("/");
     //navigate("/instituicao");
    props.OnDialogHandle();
  };

   const maskPhone = (objeto: any) => {
    if(objeto.value.length === 0)
      objeto.value = '(' + objeto.value;
 
    if(objeto.value.length === 3)
       objeto.value = objeto.value + ')';
 
  if(objeto.value.length === 8)
      objeto.value = objeto.value + '-';
 };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div >
        {/* <div>
          <label htmlFor="full_name" className="text-left">
            Nome
          </label>
          <input
            type="text"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Full Name"
            {...register("name")}
   
          />
          <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
        </div> */}

        <TextField id="outlined" size="small" label="Nome" {...register("name")} sx={{ width:"100%", marginTop:"15px" }} />       
        <TextField id="outlined" size="small" label="Email" {...register("email")} sx={{ width:"100%", marginTop:"15px" }} />     
        <TextField id="outlined" size="small" label="Telefone"  {...register("telefone")} sx={{ width:"100%", marginTop:"15px" }} 
         />     

        {/* <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="email@domain.com"
            {...register("email")}
    
          />
          <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
        </div>
        <div className="mt-3">
          <label htmlFor="email">Telefone</label>
          <input
            type="text"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="250 788 841 494"
            {...register("telefone")}
  
          />
          <p className="mt-2 text-sm text-red-600">
            {errors.telefone?.message}
          </p>
        </div> */}
        <Button variant="contained" size="small" type="submit"  sx={{ marginTop:"15px" }}>Enviar</Button>
      </div>
    </form>
  );
};

export default NewOrganization;
