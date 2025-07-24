import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const drawerWidth = 240;

export const Navbar = () => {
    const navItems = [
        {label: 'Apps Discovery', path: '/apps-discovery'},
        {label: 'Apps Inventory', path: '/app-inventory'},
        {label: 'Settings', path: '/settings'}
    ];

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <Drawer 
                variant="permanent" 
                sx={{width: drawerWidth, flexShrink: 0,
                    [`& .MuiDrawer-paper`] : { 
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: '#2c2c2c',
                        color: '#fff'
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' component='div' noWrap>
                        Reco
                    </Typography>
                </Toolbar>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.path} disablePadding>
                            <ListItemButton to={item.path} component={NavLink}
                            sx={{'&.active': {
                                borderLeft: '4px solid #A7E52F'

                            }}}>
                                <ListItemText>{item.label}</ListItemText>
                            </ListItemButton>
                                                           
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}