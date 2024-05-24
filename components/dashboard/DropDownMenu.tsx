import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import ChevronDownIcon  from '@/public/images/icons/ChevronDownIcon';

type MenuItem = {
    text: string;
    onClick: () => void;
};
  
type DropDownMenuProps = {
    menuItems: MenuItem[];
    buttonText: string;
};
  
const DropDownMenu: React.FC<DropDownMenuProps> = ({ menuItems, buttonText }) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize="sm">
                {buttonText}
        </MenuButton>
            <MenuList>
            {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.text}
          </MenuItem>
        ))}
          <MenuItem>Download</MenuItem>
        </MenuList>
      </Menu>
    );
}

export default DropDownMenu;
