import { TextField as MuiTextField, InputAdornment } from "@material-ui/core";
/*import ExpandLess from "@material-ui/icons/ExpandLess";*/
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import classes from './TextField.module.scss';


const  TextField =() => <MuiTextField
variant="filled"
label="Label"
classes = { { root: classes.root } }
placeholder={"Placeholder text"}
InputLabelProps={{
  classes: {
    root: classes.labelRoot,
  }
}}
InputProps={{
  classes: {
    root: classes.inputRoot,
  },
}}
/>

export default TextField;