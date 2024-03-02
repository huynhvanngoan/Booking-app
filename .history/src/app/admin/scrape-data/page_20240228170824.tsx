"use client";
import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Input,
    Listbox,
    Tab,
    Tabs,
} from "@nextui-org/react";
import axios from "axios";

const ScrapeData = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState<undefin
    const searchCites = async (searchString: string) => {
        const response = await axios.get(
            `https://secure.geonames.org/searchJSON?q=${searchString}&maxRows=5&username=kishan&style=SHORT`
        );
        const parsed = response.data.geonames;
        setCities(parsed?.map((city : {name: string}) => city.name) ?? []);
        console.log({ response });
    };
    return (
        <section className="m-10 grid grid-cols-3 gap-5">
            <Card className="col-span-2">
                <CardBody>
                    <Tabs>
                        <Tab key="location" title="Location">
                            <Input
                                type="text"
                                label="Search for a location"
                                onChange={(e) => searchCites(e.target.value)}
                            />
                            <div className="w-full min-h-[200px] max-w-[260px] px-1 py-2 rounded-small border-default-200 mt-5">
                                <Listbox onAction={key => setSelectedKey(key as string)}>

                                </Listbox>
                            </div>
                        </Tab>
                    </Tabs>
                </CardBody>
                <CardFooter className="flex flex-col gap-5"></CardFooter>
            </Card>
        </section>
    );
};

export default ScrapeData;
