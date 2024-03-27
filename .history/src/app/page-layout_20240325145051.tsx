import React from "react";

const PageLayout = ({ 
    children 
}: { 
    children: React.ReactNode 
}) => {
    return( 
        <div className="relative flex flex-col" id="app-container">
            <main className="flex flex-col relative">
                <section className="h-full flex-1">
                    {children}
                </section>
            </main>
        </div>
    );
};

export default PageLayout;
