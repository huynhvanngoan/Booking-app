import React from "react";

const PageLayout = ({ 
    children 
}: { 
    children: React.ReactNode 
}) => {
    return( 
        <div className="relative flex flex-col" id="app-container">
            <main className="flex flex-col relative">
                
            </main>
        </div>
    );
};

export default PageLayout;
