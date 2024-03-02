import React from "react";
import { Card, CardBody, CardFooter, Tab, Tabs } from "@nextui-org/react";

const ScrapeData = () => {
    return (
        <section className="m-10 grid grid-cols-3 gap-5">
            <Card className="col-span-2">
                <CardBody>
                    <Tabs>
                        <Tab key='location' title='Location'></Tab>
                    </Tabs>
                </CardBody>
                <CardFooter className="flex flex-col gap-5"></CardFooter>
            </Card>
        </section>
    );
};

export default ScrapeData;