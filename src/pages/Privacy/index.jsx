import React from "react";
import africa5 from "./../../assets/img/africa5.jpeg"
import Hero from "./Hero";


const FirstSection = () =>{
    return(
        <div className="mt-[6%] text-black mx-[4%] md:mx-[15%] w-[90%] md:w-[60%] mb-[4%]">
             <p  className=' text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
             I. Introduction</p>  
            <div className="">
                <p className="mt-[1%]">
                When you use Uber, you trust us with your personal data. We’re committed to keeping that trust. That starts with helping you understand our privacy practices.       
                </p>
                <p className="mt-[1%]">
                This notice describes the personal data (“data”) we collect, how it’s used and shared, and your choices regarding this data. We recommend that you read this along with our privacy overview, which highlights information about our privacy practices and provides summaries of the data we collect and how we use it.
                </p>
                
            </div>

            <p  className='mt-[2%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            II. Overview</p>  
            <div className="">
                <p className="mt-[1%]">
                This privacy notice is designed to inform users of Uber's global services about the collection and use of data. It applies universally to individuals utilizing Uber's apps, websites, and related services worldwide, excluding specific services covered by separate privacy notices. These include Uber Freight, Careem, Uber Carshare, and UT (South Korea). The notice delineates its scope, encompassing various user categories such as Riders, Drivers, Order recipients, Delivery persons, Guest users, Borrowers, and Owners.
                </p>


                <p className="mt-[1%]">
                The notice elaborates on the specific user groups covered, providing clarity on how it applies to Riders requesting transportation services, Drivers providing transportation individually or through partners, Order recipients using food delivery services, Delivery persons involved in delivery services, Guest users without Uber accounts, Borrowers utilizing Uber Carshare, and Owners making their vehicles available through Uber Carshare.
                </p>

                <p className="mt-[1%]">
                In addition to user categories, the notice extends its governance over other data collections related to Uber's services. This includes the collection of contact information for restaurant or merchant owners, accounts managed by Enterprise Customers, and data related to individuals initiating but not completing applications to become drivers or delivery persons.
                </p>

                <p className="mt-[1%]">
                Acknowledging the importance of legal compliance, the notice highlights that Uber's privacy practices adhere to the laws of the respective countries or regions in which it operates. It emphasizes regional nuances, such as contact information for regulatory bodies in Argentina, compliance with Australian Privacy Principles, and adherence to Brazil's General Data Protection Law (LGPD).
                </p>

                <p className="mt-[1%]">
                The notice concludes by emphasizing regional variations in privacy practices. Specific information is provided for users in the European Economic Area (EEA), the United Kingdom (UK), Switzerland, Mexico, Nigeria, and the United States. Users are directed to relevant resources for further details, ensuring transparency and accountability in Uber's global privacy framework.
                </p>
            </div>
            


             <p  className=' text-[#A0AABA] md:text-4xl text-2xl mt-[5%]' style={{fontFamily: "Zen Dots" }}>
             Data collections and uses</p>  
            <div className="">
                <p className="mt-[1%]">
                Uber collects a comprehensive range of user data from various sources, including data provided by users, data created during the use of their services, and data from other sources. This includes account information, background check information for drivers, identity verification documents, demographic data, user content, travel information, location data, transaction information, usage data, device data, and communications data. Additionally, data is gathered from users participating in referral programs, Uber account owners requesting services on behalf of others, and various business partners and service providers.
                </p>
                <p className="mt-[1%]">
                Safety, fraud protection, and security are paramount concerns for Uber, leading to the use of data for verifying user accounts, conducting background checks, identity verification, and employing facial recognition technology. The company actively monitors and addresses safety incidents, potentially unsafe driving behavior, and fraudulent activities.

                </p>
                <p className="mt-[1%]">
                Customer support relies on the information collected, including call recordings and chat logs, to investigate and address user concerns. Data is also used for research and development to enhance services, enable communications between users, and for marketing and advertising efforts. Uber utilizes cookies and other identification technologies for authentication, personalization, advertising effectiveness measurement, and analyzing user behaviors.
                </p>

                <p className="mt-[1%]">
                In conclusion, Uber's extensive data collection and utilization are foundational to delivering reliable and convenient transportation and delivery services, ensuring safety, providing customer support, conducting research and development, enabling communications, implementing marketing strategies, and complying with legal requirements. The company's practices aim to balance service efficiency with user privacy and security considerations.
                </p>
               
            </div>


            <p  className=' text-[#A0AABA] md:text-4xl text-2xl mt-[5%]' style={{fontFamily: "Zen Dots" }}>
            Legal information</p>  
            <div className="">
                <p className="mt-[1%]">
                Uber operates on a global scale, processing user data globally, which may involve transferring personal data to the United States and other countries with different data protection laws. Despite the variations in regulations, Uber is committed to safeguarding users' personal data universally. This commitment is reflected in the implementation of global measures such as data encryption during transit and at rest, company-wide privacy and data security training, and internal policies restricting access to and use of user data.
                </p>
                <p className="mt-[1%]">
                When transferring user data from the European Economic Area (EEA), the UK, and Switzerland, Uber adheres to various legal mechanisms, including the necessity to fulfill agreements with users, consent, adequacy decisions, and specific transfer mechanisms like Standard Contractual Clauses. The company's certifications, such as the EU-U.S. Data Privacy Framework (DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF, are in line with the principles set forth by the United States Department of Commerce. In case of conflicts or invalidation of these frameworks, Uber commits to alternative data transfer mechanisms.
                </p>
                <p className="mt-[1%]">
                Uber's DPF certification covers data received from other data controllers, and users have the right to access their personal data subject to this certification. Uber is responsible for onward transfers of personal data to third parties and is obligated to share user data with law enforcement agencies as required by applicable law. The company is subject to the investigatory and enforcement powers of the U.S. Federal Trade Commission.</p>

                <p className="mt-[1%]">
                Users can access more information about the EU-U.S. DPF and Swiss-U.S. DPF, view Uber's certification, and learn about the scope of data subject to the certification on Uber's website.
                </p>


                <p>This framework ensures that Uber maintains a high standard of data protection and privacy practices, irrespective of users' geographic locations or the jurisdictions in which their data is processed.</p>

               
            </div>
            
            
             
        </div>
    )
}





function Privacy(){
    return(
        <div className=" flex flex-col bg-Dark bg-white ">
            
            <div className='flex flex-row w-full items-center bg-Dark '>
                <Hero/>       
            </div> 
            <FirstSection/>
 
         
               
        </div>  
    )
}

export default Privacy


//https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=9.02408986856831&lo1=38.790528287365106&la2=9.027226282680063&lo2=38.796426667139066&apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6InpheXJpZGUiLCJpZCI6IjM1NTY1Mjk3LTZjZGUtNDVmNy1hYjllLTAwMjU1Y2MxZGVlZSIsInVzZXJuYW1lIjoiemF5cmlkZSJ9.s3mr--J2KM72MWedho9Vo5qOZn-zSk3IR1ZXZ73xppw



