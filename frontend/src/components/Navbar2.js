import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import { Button, ListItem } from '@mui/material';
import TableChartIcon from '@mui/icons-material/TableChart';
import { useHref } from 'react-router-dom';
import Reg_App from './Layout/Reg_App';
//import { Link } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        ...other
    } = props;


    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 0 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

export default function Navbar2() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    {/* <h1 style={{display: isOpen ? "block" : "none" }} className="logo">Logo</h1> */}
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <Button className='menuBtn' onClick={toggle} style={{ marginLeft: 90 }}>
                            {isOpen ? <MenuOpenIcon style={{ color: 'black' }} /> : <MenuIcon style={{ marginLeft: -230, color: 'black' }} />}
                        </Button>
                        {/* <MenuIcon onClick={toggle}/> */}
                    </div>
                </div>
                <TreeView
                    aria-label="gmail"
                    defaultExpanded={['3']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 100 }} />}
                    sx={{ height: 800, flexGrow: 1, maxWidth: 200, overflowY: 'auto', marginTop: 2, marginRight: 5 }}
                >
                    <StyledTreeItem nodeId="3" labelText="Home" spacing={10000} labelIcon={TableChartIcon} sx={{ marginRight: 5 }} >

                        <StyledTreeItem
                            nodeId="5"
                            labelText="Social"
                            labelIcon={SupervisorAccountIcon}
                            //labelInfo="90"
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                           label={
                            <ListItem button components='a' href="/Reg_App">
<ListItemText primary="Soc"/>
                            </ListItem>
                           }


                        />
                            {/* <Link href='/Reg_App'>
                                = Home =
                            </Link> */}
                            
                            {/* <StyledTreeItem /> */}


                            <StyledTreeItem
                                nodeId="6"
                                labelText="Updates"
                                labelIcon={InfoIcon}
                                //labelInfo="2,294"
                                color="#e3742f"
                                bgColor="#fcefe3"
                            />
                            <StyledTreeItem
                                nodeId="7"
                                labelText="Forums"
                                labelIcon={ForumIcon}
                                //labelInfo="3,566"
                                color="#a250f5"
                                bgColor="#f3e8fd"
                            />
                            <StyledTreeItem
                                nodeId="8"
                                labelText="Promotions"
                                labelIcon={LocalOfferIcon}
                                //labelInfo="733"
                                color="#3c8039"
                                bgColor="#e6f4ea"
                            />
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
                </TreeView>
            </div>
            {/* <main>{children}</main> */}
        </div>
    );
}