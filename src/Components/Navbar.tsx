import logo from '../assets/logo.png';
//import cart from '../assets/cart.svg'
//import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from "@mui/icons-material/PhoneAndroid";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from 'react';

export default function Navbar(){
    
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon/>
        },
        {
            text: "About",
            icon: <InfoIcon />
        },
        {
            text: "Testimonials",
            Icon: <CommentRoundedIcon />
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />
        }
    ]

    return(
        <>
            <nav className='flex items-center justify-between'>
                <div>
                    <img src={logo} alt="logo" className='h-[150px]' />
                </div>
                <div className='text-[#000] text-[1.1rem] font-semibold md:hidden'>
                    <a className='mr-[3rem]' href="">Home</a>
                    <a className='mr-[3rem]' href="">About</a>
                    <a className='mr-[3rem]' href="">Testimonials</a>
                    <a className='mr-[3rem]' href="">Contact</a>
                    <button className='rounded-[5rem] font-semibold bg-[#fff] button'>Reservas Agora</button>
                </div>
                
                <div  className='cursor-pointer text-[1.5rem]'>
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                    <Box
                        sx={{widht:250}}
                        role="presentation"
                        onClick={() => setOpenMenu(false)}
                        onKeyDown={() => setOpenMenu(false)}
                    >
                        <List>
                            {
                                menuOptions.map((item) => {
                                    return(
                                        <ListItem key={item.text}>
                                            <ListItemButton>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText>{item.text}</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
            </nav>
        </>
    )
}