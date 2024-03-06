import React from "react";
import Layout from "../layout/layout";


const HomePage = () => {



  return (
    <Layout>
    <div className="bg-gray-100">
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-8">
            ICT Summit, Conference
          </h1>
          <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-10">
            <p className="text-lg text-gray-700 mb-4">
              FREE TO REGISTER Sign up for a free account on SME. There's no cost to
              post your event.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              SPONSOR MY EVENT Negat Documents & Images
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Centre of Conference, Nouer Wenschaft, Letzue rs, Lurembours
            </p>
            <p className="text-lg text-gray-700 mb-4">
              oomPackage Serings Confes Closed Des ICT Su Location
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Centre de Confide Links M. AL 0/01/2016 Tage ADD X T
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Conference Audience Audence t 04/01/2016 Twitter UPS
            </p>
            <p className="text-lg text-gray-700 mb-4">
              SHOW PREVIEW Profile Completeness Youtu the event out your known
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Post Your Event</h2>
              <p className="text-gray-700 mb-4">
                Fill out your event's profile and craft its digital prospectus to
                attract sponsors. Include event dates, pricing for sponsorship
                offerings and an overview of the event, its attendees and what
                sponsors can expect. Our team will review your posting before it
                goes live.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                POST YOUR EVENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;