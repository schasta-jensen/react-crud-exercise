import { ReactElement } from "react";
import { SvgIconProps } from '@mui/material/SvgIcon';

export interface RenderTree {
    id: string;
    name: string;
    icon: (props: SvgIconProps<any>) => ReactElement;
    page: string;
    children?: readonly RenderTree[];
    
  }