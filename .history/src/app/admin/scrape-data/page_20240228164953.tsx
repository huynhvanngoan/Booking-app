'use client';
import React from "react";
import { Card, CardBody, CardFooter, Input, Tab, Tabs } from "@nextui-org/react";
import axios from "axios";

const ScrapeData = () => {
    
    const searchCites = async (searchString: string) => {
        const response = await axios.get(`https://secure.geonames.org/searchJSON?q=${searchString}&maxRows=5&username=`)
    }
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
