import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Organization from "../../model/Organization";
import { organizationList } from "../../data/mock.json";

type initialStateType = {
  organizationList: Organization[];
};

const initialState: initialStateType = {
  organizationList,
};

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    addOrganization: (state, action: PayloadAction<Organization>) => {
      console.log('add',action); 
      state.organizationList.push(action.payload);
    },
    updateOrganization: (state, action: PayloadAction<Organization>) => {
      const {
        payload: { organization_Id, name, alias, telecom, position, hoursOfOperation, active },
      } = action;
      console.log('put',organization_Id, name);
      state.organizationList = state.organizationList.map((item) =>
      item.organization_Id === organization_Id ? { ...item, name, alias, telecom, position, hoursOfOperation, active } : item
      );
    },
    removeOrganization: (state, action: PayloadAction<{ id: string }>) => {
      state.organizationList = state.organizationList.filter(
        (organization) => organization.organization_Id !== action.payload.id
      );
    },
  },
});

export const { addOrganization, updateOrganization, removeOrganization } =
  organizationSlice.actions;
export const getOrganizationList = (state: RootState) => state.organization.organizationList;

export default organizationSlice.reducer;
