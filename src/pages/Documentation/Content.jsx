import React from "react";
import RequestSample from "./RequestSample";
import TableResponse from "./TableResponse";
import TableRequirement from "./TableRequirement";

const IntroPage = () => {
  return (
    <div className="min-h-screen">
      <div className="w-[90%] md:w-[80%] md:ml-[0%] ml-[3%]">
        <p className="mt-[1%]">
          GebetaMaps is a web-based mapping service that provides various APIs
          for your location-based needs. You can use GebetaMaps to access
          high-quality and up-to-date data for geocoding, routing, searching,
          matrix, and optimization. Whether you need to find a place, plan a
          trip, optimize a route, or analyze a location, GebetaMaps can help you
          with its powerful and easy-to-use features.
        </p>

        <p className="mt-[1%]">
          To access GebetaMaps, you need to sign in with your email and
          password. If you don’t have an account, you can register for free and
          get a trial token. A token is a unique code that allows you to use the
          GebetaMaps APIs. You can manage your tokens and view your usage
          statistics on your dashboard. To use a token, you need to include it
          in your API requests as a parameter. You will get a response in JSON
          format that contains the coordinates and other details of the address.
          You can use the response to display the location on a map or perform
          other operations. For more information on how to use the GebetaMaps
          APIs, you can check out the documentation on direction , matrix route
          optimizatin and other apis
        </p>
        <p
          className="md:mt-[2%] text-[#A0AABA] md:text-2xl text-xl md:ml-[0%] ml-[3%]"
          style={{ fontFamily: "Zen Dots" }}
        >
          Using sdk
        </p>
        <p className="mt-[1%]">
          In our commitment to simplicity and efficiency, we proudly introduce
          the Dart SDK and node js sdk tailored for seamless integration with
          GebetaMaps. The Dart SDK focuses on the fundamental essence of
          functionality through API calls to our dedicated servers. This
          minimalistic yet powerful approach empowers developers to interact
          directly with GebetaMaps services, abstracting away unnecessary
          complexities and streamlining the integration process.
        </p>
        <p className="mt-[1%]">
          The Dart SDK, specifically crafted for the Flutter framework,
          facilitates a smooth integration of GebetaMaps into cross-platform
          mobile, web, and desktop applications. Leveraging Dart's concise
          syntax and Flutter's reactive UI framework, developers can create
          visually appealing and responsive interfaces that seamlessly interact
          with GebetaMaps services. This SDK acts as the bridge between the
          Flutter front-end and GebetaMaps, ensuring a cohesive user experience
          across various platforms.
        </p>

        <p className="mt-[1%]">
          Simultaneously, the Node.js SDK has been engineered to handle the
          server-side aspects of GebetaMaps integration. This SDK is tailored
          for back-end development, allowing developers to employ Node.js's
          asynchronous and event-driven architecture to efficiently manage
          communication with GebetaMaps services. Through API calls and
          server-side logic, developers can harness the power of the Node.js SDK
          to fetch and manipulate data, ensuring that the GebetaMaps integration
          is both robust and scalable.
        </p>

        <p className="mt-[1%]">
          Both SDKs, though distinct in their purposes, work in tandem to create
          a comprehensive solution for GebetaMaps integration. The Dart SDK
          optimizes the front-end development process within Flutter, while the
          Node.js SDK manages server-side interactions, collectively providing
          developers with a versatile toolkit to seamlessly incorporate
          GebetaMaps functionalities into their applications. This dual SDK
          approach underscores our commitment to offering developers flexibility
          and efficiency in integrating GebetaMaps across a spectrum of
          application environments.
        </p>
        <p className="mt-[1%]">
          For comprehensive details on integrating GebetaMaps into your
          Dart-based applications using our Dart SDK, please visit{" "}
          <a
            className="text-blue-600"
            href="https://pub.dev/packages/gebetamap/example"
          >
            https://pub.dev/packages/gebetamap/example
          </a>
          . This resource provides a wealth of information, including code
          examples and usage guidelines, enabling developers to seamlessly
          incorporate GebetaMaps functionalities into their Flutter projects.
          Additionally, for Node.js developers seeking insights into server-side
          integration, the Node.js SDK documentation can be found at{" "}
          <a
            className="text-blue-600"
            href="https://www.npmjs.com/package/gebetamap?activeTab=versionse"
          >
            https://www.npmjs.com/package/gebetamap?activeTab=versions
          </a>
          . Here, you'll discover valuable resources, documentation, and
          version-specific details to streamline the process of integrating
          GebetaMaps into your Node.js-based applications. Explore these links
          to access comprehensive documentation and ensure a smooth and
          efficient integration of GebetaMaps into your projects.
        </p>
      </div>
    </div>
  );
};

const Content = ({ object, current }) => {
  const returnContent = () => {
    return current == "intro" ? (
      <IntroPage />
    ) : (
      <div className="w-[90%] md:w-[80%] md:ml-[0%] ml-[3%]">
        <p className="mt-[2%]">{object.introduction}</p>
        <p className="mt-[2%]   font-bold text-xl">{object.usecase}</p>
        <p className="mt-[1%]">{object.useCaseText}</p>
        <div className="font-bold ml-[2%]">
          <ul className="list-disc mt-[1%]">
            {object.useCaselist.map((n) => (
              <li className="mb-2">{n}</li>
            ))}
          </ul>
        </div>

        <RequestSample curl={object.requestText} js={[]} />

        <p className="mt-[2%]   font-bold text-xl text-[#A0AABA]">
          Requirement parameter
        </p>
        <TableRequirement tabledata={object.requiredParameter} />
        <p className="mt-[2%]   font-bold text-xl text-[#A0AABA]">
          Optional parameter
        </p>
        <TableRequirement tabledata={object.optionalParameter} />

        <p className="mt-[2%]   font-bold text-xl text-[#A0AABA] ">
          Directions API Responses
        </p>
        <TableResponse tabledata={object.responseTable} />

        <p className="mt-[2%]   font-bold text-xl text-[#A0AABA]">
          {object.restrictionHeader}
        </p>
        <p className="mt-[1%]"> {object.restriction.header}</p>

        <div className="font-bold ml-[2%]">
          <ul className="list-disc mt-[1%]">
            {object.restriction.restrictions.map((n) => (
              <li className="mb-2">{n}</li>
            ))}
          </ul>
        </div>

        <p className="mt-[2%]   font-bold text-xl text-[#A0AABA]">
          {object.pricingHeader}
        </p>
        <p className="mt-[1%]"> {object.pricingText} </p>
      </div>
    );
  };

  return returnContent();
};

export default Content;
