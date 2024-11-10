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
            icon: <CommentRoundedIcon />
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
                <div className='md:text-[1rem]'>
                    <a className='lg:mr-[3rem] mr-[1rem] links' href="">Home</a>
                    <a className='lg:mr-[3rem] mr-[1rem] links' href="">Sobre</a>
                    <a className='lg:mr-[3rem] mr-[1rem] links' href="">Depoimentos</a>
                    <a className='lg:mr-[3rem] mr-[1rem] links' href="">Contatos</a>
                    <a className='lg:mr-[3rem] mr-[1rem] links' href="">Cart</a>
                    <button className='rounded-[5rem] font-semibold bg-[#fff] button md:text-[1rem] links'>Reservas Agora</button>
                </div>
                
                <div  className='cursor-pointer text-[2.5rem] menu'>
                    <HiOutlineBars3 color='#000' onClick={() => setOpenMenu(true)} />
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
                                                <ListItemIcon className='text-[1rem]'>{item.icon}</ListItemIcon>
                                                <ListItemText className='text-[1.5rem]'>{item.text}</ListItemText>
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