import {
    Box,
    Spacer,
    Badge,
    Text,
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
} from '@chakra-ui/react'
import {
    AppShell,
    Sidebar,
    SidebarToggleButton,
    SidebarSection,
    NavItem,
    NavGroup,
    Persona,
    PersonaContainer,
    PersonaAvatar,
    PersonaDetails,
    PersonaLabel,
    PersonaSecondaryLabel,
    PersonaTertiaryLabel,
    Presence,
    DataTable,
    ColumnDef,
    NProgress, 
    NProgressNextRouter
} from '@saas-ui/react'
import { FiHome, FiUsers, FiSettings, FiHelpCircle } from 'react-icons/fi'
import Bannner from './Bannner'
import React from 'react'

function Sidenav() {

    return (

        <AppShell
            navbar={
                <Box as="header" borderBottomWidth="1px" py="2" px="4">
                    <h1>Logo</h1>
                </Box>
            }
            sidebar={
                <Sidebar >
                    <SidebarToggleButton />
                    <SidebarSection direction="row">
                        <Image
                            src="https://saas-ui.dev/favicons/favicon-96x96.png"
                            boxSize="7"
                        />
                        <Spacer />
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={
                                    <PersonaAvatar
                                        presence="online"
                                        size="xs"
                                        src="/showcase-avatar.jpg"
                                    />
                                }
                                variant="ghost"
                            />
                            <MenuList>
                                <MenuItem>Sign out</MenuItem>
                            </MenuList>
                        </Menu>
                    </SidebarSection>
                    <SidebarSection aria-label="Main">
                        <NavGroup>
                            <NavItem icon={<FiHome />} isActive>
                                Home
                            </NavItem>
                            <NavItem icon={<FiUsers />}>Users</NavItem>
                            <NavItem icon={<FiSettings />}>Settings</NavItem>
                        </NavGroup>

                        <NavGroup title="Teams" isCollapsible>
                            <NavItem>Sales</NavItem>
                            <NavItem>Support</NavItem>
                        </NavGroup>
                        <NavGroup title="Tags" isCollapsible>
                            <NavItem
                                icon={<Badge bg="purple.500" boxSize="2" borderRadius="full" />}
                            >
                                <Text>Lead</Text>
                                <Badge opacity="0.6" borderRadius="full" bg="none" ms="auto">
                                    83
                                </Badge>
                            </NavItem>
                            <NavItem
                                icon={<Badge bg="cyan.500" boxSize="2" borderRadius="full" />}
                            >
                                <Text>Customer</Text>
                                <Badge opacity="0.6" borderRadius="full" bg="none" ms="auto">
                                    210
                                </Badge>
                            </NavItem>
                        </NavGroup>
                    </SidebarSection>
                    <SidebarSection>
                        <NavItem icon={<FiHelpCircle />}>Documentation</NavItem>
                    </SidebarSection>
                </Sidebar>
            }

        >
            <Box py="2" px="4">
                <Persona>
                    <PersonaAvatar name="Eelco Wiersma" presence="online" />
                    <PersonaDetails>
                        <PersonaLabel>Eelco Wiersma</PersonaLabel>
                        <PersonaSecondaryLabel>Founder</PersonaSecondaryLabel>
                    </PersonaDetails>
                </Persona>
            </Box >
            <Bannner />
            <Box position="relative" overflow="hidden" height="10px">
                <NProgress isAnimating position="absolute" />
            </Box>
        </AppShell>


    )
}

export default Sidenav
