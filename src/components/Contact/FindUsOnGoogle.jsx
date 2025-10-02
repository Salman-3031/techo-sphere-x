import React from "react";
import Title from "../Title/Title";

const FindUsOnGoogle = () => {
  return (
    <section className="w-full ">
       <Title title={"Find Us on Google"} description={"Click below to view our location on Google Maps."}/>
      <div className="container text-center bg-bglight dark:bg-bgdark">
       
        <a
          href="https://www.google.com/maps/@34.7964373,72.4140418,18z?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition duration-300"
        >
          View on Google Maps
        </a>

        {/* Optional: Embed Google Map preview */}
        <div className="mt-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1721.2015010759474!2d72.41416233273027!3d34.796375951121256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1759380564753!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUsOnGoogle;
