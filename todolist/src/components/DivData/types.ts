import { SetStateAction } from "react";

export interface DivDataProps {
  ischecked: boolean;
  setischecked: React.Dispatch<SetStateAction<boolean>>;
  istodos: string[];
  setistodos: React.Dispatch<SetStateAction<string[]>>;
  isremoved: string[];
  setisremoved: React.Dispatch<SetStateAction<string[]>>;
  isvalue: string;
  setisvalue: React.Dispatch<SetStateAction<string>>;
}
