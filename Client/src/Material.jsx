import {useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

export default function Material() {
  const [value, setValue] = useState(0);
  return(
    <>
      {/* 버튼 */}
      <Button variant="contained">Contained</Button>
      {/* 아이콘 */}
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      {/* rating */}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      <TextField id="outlined-basic" label="password" variant="outlined" />
    </>
  )
}