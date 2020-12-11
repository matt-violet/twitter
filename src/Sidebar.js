import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar({ updateCurrentPage, visitUserProfile }) {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>
      <SidebarOption active Icon={HomeIcon} text="Home" updateCurrentPage={updateCurrentPage} />
      <SidebarOption Icon={SearchIcon} text="Explore" updateCurrentPage={updateCurrentPage} visitUserProfile={visitUserProfile} />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" updateCurrentPage={updateCurrentPage} />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" updateCurrentPage={updateCurrentPage} />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" updateCurrentPage={updateCurrentPage} />
      <SidebarOption Icon={ListAltIcon} text="Lists" updateCurrentPage={updateCurrentPage} />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" updateCurrentPage={updateCurrentPage} visitUserProfile={visitUserProfile} />
      <SidebarOption Icon={MoreHorizIcon} text="More" updateCurrentPage={updateCurrentPage} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar;
