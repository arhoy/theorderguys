import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { StandardPlan } from './StandardPlan';
import { Pricing1 } from './Pricing1';
import { Features1 } from './Features1';
import { Benefits1 } from './Benefits1';
import { SetupCost1 } from './Setupcost1';
import { OurExtras1 } from './OurExtras1';

export const InfoTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Pricing</Tab>
        <Tab>Features</Tab>
        <Tab>Benefits</Tab>
        <Tab>Setup Cost</Tab>
        <Tab>Our Extras</Tab>
      </TabList>
      <TabPanel>
        <StandardPlan />
      </TabPanel>
      <TabPanel>
        <Pricing1 />
      </TabPanel>
      <TabPanel>
        <Features1 />
      </TabPanel>
      <TabPanel>
        <Benefits1 />
      </TabPanel>
      <TabPanel>
        <SetupCost1 />
      </TabPanel>
      <TabPanel>
        <OurExtras1 />
      </TabPanel>
    </Tabs>
  );
};
