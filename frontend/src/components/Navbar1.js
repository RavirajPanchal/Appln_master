// import React from 'react'
// import IconButton from '@material-ui/core/IconButton';
// import GroupIcon from '@material-ui/icons/Group';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

// import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
// import AccountTreeIcon from '@material-ui/icons/AccountTree';
// import TableChartIcon from '@material-ui/icons/TableChart';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import RestoreIcon from '@material-ui/icons/Restore';
// import MenuList from '@material-ui/core/MenuList';
// import MenuItem from '@material-ui/core/MenuItem';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Typography from '@material-ui/core/Typography';


// function Navbar1() {
//     const toggleOpen = (event) => {

//         setOpenMenuState({ ...openMenuState, openMenu: false })

//         // setOpenMenuState({ ...openMenuState, assignMenu: false })

//     }

//     let isMasters = false;

//     let isHistory = true;
//     let viewControl = {};

//     let [showTable, setShowTable] = React.useState({

//         hideTableBoolean: false

//     });


//     let menus = {

//         menus: ['id_usergroup', 'id_organization', 'id_roles', 'id_privileges', 'id_applications', 'id_globaluser', 'id_audit', 'id_globalfilter'],

//         id_usergroup: 'User Group',

//         id_organization: 'Organizations',

//         id_roles: 'Roles',

//         id_privileges: 'Privileges',

//         id_applications: 'Applications',

//         id_globaluser: 'Global User',

//         id_audit: 'Audit',

//         id_globalfilter: 'Global Filter'

//     }


//     const openRightContent = (e) => (event) => {

//         clearActiveTabs();

//         if (e === 'id_globaluser') {

//             setShowTable({ ...showTable, hideTableBoolean: false });

//             document.getElementById(e).classList.add('active');

//             expandMenu('m1')

//         }

//         else if (e === 'id_globalfilter') {

//             setShowTable({ ...showTable, hideTableBoolean: false });

//             document.getElementById(e).classList.add('active');

//             expandMenu('m1')

//         } else {

//             document.getElementById(e).classList.add('active');

//         }

//         setShowContent({ ...showContent, name: menus[e] });

//         loadComponent(menus[e]);

//     }

//     let clearActiveTabs = () => {

//         let t = document.getElementsByClassName('pageTrigger');

//         if (t && t.length > 0) {

//             for (let i = 0; i < t.length; i++) {

//                 t[i].classList.remove('active');

//             }

//         }

//     }
//     let expandMenu = (v) => {
//         if (isMasters) {

//             document.getElementById(v).classList.toggle('show');

//         }

//         // document.getElementById(v + 'subMenus').classList.toggle('show');

//     }
//     const [openMenuState, setOpenMenuState] = React.useState({

//         openMenu: false,

//         masterMenu: false,

//         assignMenu: false,

//     });
//     return (
//         <div className="row">
//             {/* {openMenuState.openMenu === true ? <div className="c-l a-c-f-l"> */}
//             <div className="toggle-icon-open">
//                 <IconButton edge="start" onClick={() => toggleOpen()}> <ChevronLeftIcon /></IconButton>
//             </div>
//             <div className="menus">
//                 {isMasters ?
//                     <div className="menu m1 show" id="m1">
//                         <div className="lineItem" onClick={() => expandMenu('m1')}>
//                             <IconButton edge="start" className="c1 iconButton"> <TableChartIcon /> </IconButton>
//                             <label> Master </label>
//                             <IconButton edge="end" className="primaryBtn"> <ExpandMoreIcon /> </IconButton>
//                         </div>
//                         <div className="subMenus show" id="m1subMenus">
//                             <MenuList className="subMenu">
//                                 {viewControl.isUserGroupView ? <MenuItem id="id_usergroup" className="lineItem pageTrigger" onClick={openRightContent('id_usergroup')}>
//                                     <ListItemIcon className="c2 iconButton">
//                                         <GroupIcon />
//                                     </ListItemIcon>
//                                     <Typography variant="inherit">User Group</Typography>
//                                 </MenuItem> : ''}
//                                 {viewControl.isOrganizationView ? <MenuItem id="id_organization" className="lineItem pageTrigger" onClick={openRightContent('id_organization')}>
//                                     <ListItemIcon className="c3 iconButton">
//                                         <AccountTreeIcon />
//                                     </ListItemIcon>
//                                     <Typography variant="inherit">Organization</Typography>
//                                 </MenuItem> : ''}
//                                 {viewControl.isRoleView ? <MenuItem id="id_roles" className="lineItem pageTrigger" onClick={openRightContent('id_roles')}>
//                                     <ListItemIcon className="c4 iconButton">
//                                         <PersonAddIcon />
//                                     </ListItemIcon>
//                                     <Typography variant="inherit">Roles</Typography>
//                                 </MenuItem> : ''}
//                                 {viewControl.isApplicationView ? <MenuItem id="id_applications" className="lineItem pageTrigger" onClick={openRightContent('id_applications')}>
//                                     <ListItemIcon className="c5 iconButton">
//                                         <SettingsApplicationsIcon />
//                                     </ListItemIcon>
//                                     <Typography variant="inherit">Applications</Typography>
//                                 </MenuItem> : ""}
//                                 {viewControl.isPrivilegeView ? <MenuItem id="id_privileges" className="lineItem pageTrigger active" onClick={openRightContent('id_privileges')}>
//                                     <ListItemIcon className="c5 iconButton">
//                                         <VerifiedUserIcon />
//                                     </ListItemIcon>
//                                     <Typography variant="inherit">Privileges</Typography>
//                                 </MenuItem> : ''}
//                                 {isHistory ? <MenuItem id="id_audit" className="lineItem pageTrigger" onClick={openRightContent('id_audit')}>
//                                     <ListItemIcon className="c5 iconButton">
//                                         <RestoreIcon />
//                                     </ListItemIcon>
//                                     <Typography variant="inherit">History Transaction</Typography>
//                                 </MenuItem> : ''}
//                                 {/* <MenuItem id="id_globaluser" className="lineItem pageTrigger" onClick={openRightContent('id_globaluser')}>
//                                         <ListItemIcon className="c5 iconButton">
//                                             <VerifiedUserIcon />
//                                         </ListItemIcon>
//                                         <Typography variant="inherit">Global User</Typography>
//                                     </MenuItem> */}
//                             </MenuList>
//                         </div>
//                     </div>
//                     : ''}
//             </div>

//         </div>
//     )
// }

// export default Navbar1