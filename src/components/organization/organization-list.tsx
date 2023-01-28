import { useState } from "react";
import OrganizationInfo from "../organization/organization-Info";
import Organization from "../../model/Organization";
import NewOrganization from "../organization/organization-add";
import DialogBox from "../DialogBox";
import { OrganizationDialog } from "../organization/organization-dialog";

interface OrganizationProps {
  organizations: Organization[] | undefined;
}
const OrganizationList: React.FC<OrganizationProps> = ({ organizations }) => {
  let [open, setOpen] = useState(false);
  let [id, setID] = useState("");

  const OrganizationUpdate = (id: string) => {
    setID(id);
    setOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogHandle = () => {
    setOpen((current) => !current);
  };
  console.log(organizations);  return (
    <div className="flex flex-col mx-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">     
        {organizations &&
          organizations.map((organization) => (
            <OrganizationInfo
              key={organization.organization_Id}
              organization={organization}
              onOrganizationUpdate={OrganizationUpdate}
            />
          ))}

        {open && (
          <OrganizationDialog open={open} OnDialogHandle={DialogHandle}>
            <NewOrganization id={id} OnDialogHandle={DialogHandle} />
          </OrganizationDialog>
        )}
      </div>
    </div>
  );
};

export default OrganizationList;


