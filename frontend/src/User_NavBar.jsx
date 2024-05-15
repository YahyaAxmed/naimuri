import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function User_NavBar() {
  return (
    <TabGroup>
        <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
        </TabPanels>
        <TabList>
        <Tab>Home</Tab>
        <Tab>Reservation</Tab>
        <Tab>History</Tab>
        </TabList>
    </TabGroup>
  )
}

export default User_NavBar;