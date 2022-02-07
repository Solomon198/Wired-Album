import * as React from 'react';
import { alpha, styled as styledMaterial } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase
} from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const BarContainer = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
`


const Search = styledMaterial('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styledMaterial('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styledMaterial(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function MenuAppBar({title,IconComponent,onClick,search,onChangeText}) {
 
  return (
    <BarContainer>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="primary"  position="static">
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {title}
                </Typography>
                {
                  search && (
                    <Search>
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
            </AppBar>
          </Box>
    </BarContainer>
    
  );
}

MenuAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  IconComponent: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  search: PropTypes.bool,
  onChangeText: PropTypes.func,
}
