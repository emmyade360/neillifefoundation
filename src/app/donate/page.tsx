'use client'
import React, { useEffect } from "react";
const Page: React.FC = () => {
  
    useEffect(() => {
        // Inject the Donorbox script dynamically
        const script = document.createElement("script");
        script.src = "https://donorbox.org/widget.js";
        script.async = true;
        script.setAttribute("paypalExpress", "true");
        document.body.appendChild(script);
    
        // Cleanup script on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return (
      <div className="page-shell flex flex-col items-center">
        <div className="my-2 w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:p-4">
          <iframe
            src="https://donorbox.org/embed/project-support-4?language=en-us"
            name="donorbox"
            allow="payment *"
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", minWidth: "250px", maxWidth: "520px", height: "900px" }}
          />
        </div>
      </div>
    )
}
export default Page;

