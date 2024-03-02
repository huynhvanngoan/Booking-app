import React from "react";
import { Card, CardBody, CardFooter, Input, Tab, Tabs } from "@nextui-org/react";

const ScrapeData = () => {
    
    const search
    return (
        <section className="m-10 grid grid-cols-3 gap-5">
            <Card className="col-span-2">
                <CardBody>
                    <Tabs>
                        <Tab key='location' title='Location'>
                            <Input type='text' label='Search for a location' onChange={e => } />
                        </Tab>
                    </Tabs>
                </CardBody>
                <CardFooter className="flex flex-col gap-5"></CardFooter>
            </Card>
        </section>
    );
};

export default ScrapeData;
