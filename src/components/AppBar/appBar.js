import * as React from 'react';
import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  Hidden
} from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import {
  BarContainer,
  CustomAppBar,
  Search,
  SearchIconWrapper,
  StyledInputBase
} from './appBar.components.js'

export default function AppBar({title,IconComponent,onClick,search,onChangeText}) {
 
  return (
    <BarContainer>
        <Box sx={{ flexGrow: 1 }}>
            <CustomAppBar color="primary"  position="static">
              <Toolbar>
                <IconButton
                  onClick={onClick}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {IconComponent}
                </IconButton>
                  <Typography sx={{flexGrow: 1}}  variant="h6" component="div">
                    {title}
                  </Typography>
                {
                  search && (
                    <Search data-testid="search-component">
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={(e)=>onChangeText(e.target.value)}
                    />
                </Search>
                  )
                }
              </Toolbar>
            </CustomAppBar>
          </Box>
    </BarContainer>
    
  );
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  IconComponent: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  search: PropTypes.bool,
  onChangeText: PropTypes.func,
}
