import  { TreeItemProps } from '@mui/lab/TreeItem';
import { SvgIconProps } from '@mui/material/SvgIcon';

export type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
};
  