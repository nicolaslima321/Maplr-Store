import React, { useContext, useEffect, useRef, useState } from 'react';

import { AccountCircle, Logout } from '@mui/icons-material';
import { Avatar, Box, Divider, Popover, Tooltip } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { RootState } from '~/store';

import styles from '~/components/ProfileIcon/ProfileIcon.module.scss';

export const ProfileIcon: React.FC<{}> = () => {
  const [rootState, setRootState] = useContext(RootState.Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [openTooltip, setOpenTooltip] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const { authenticated, user } = rootState;

  useEffect(() => {
    setIsAuthenticated(authenticated);
  }, [authenticated]);

  const handleMouseEnterTooltip = () => {
    if (openPopover) {
      return;
    }

    setOpenTooltip(true);
  };

  const handleMouseLeaveTooltip = () => setOpenTooltip(false);

  const handleOpenPopover = (event: React.MouseEvent<any>) => {
    setOpenTooltip(false);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const tooltipTitle =  authenticated
    ? `Welcome back, ${user.name}!`
    : 'Click here to sign in or sign up!';

  const openPopover = Boolean(anchorEl);
  const idPopover = openPopover ? 'simple-popover' : undefined;

  const handleLogoutClick = () => {
    setAnchorEl(null);
    setIsAuthenticated(false);
    setRootState({
      authenticated: false,
      user: { orders: [] },
    });
  }

  return (
    <Tooltip
      className={styles['profile-icon']}
      open={openTooltip}
      onMouseEnter={handleMouseEnterTooltip}
      onMouseLeave={handleMouseLeaveTooltip}
      title={tooltipTitle}
      placement="bottom"
    >
      <div>
        {
          authenticated ?
            <Avatar
              aria-describedby={idPopover}
              onClick={handleOpenPopover}
              src={user.avatarImage}
            />
          :
            <AccountCircle
              aria-describedby={idPopover}
              onClick={handleOpenPopover}
            />
        }

        <Popover
          id={idPopover}
          open={openPopover}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircle />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogoutClick}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Popover>
      </div>
    </Tooltip>
  );
};
