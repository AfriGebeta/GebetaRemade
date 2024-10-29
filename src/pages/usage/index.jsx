import React, {useEffect, useState} from "react";
import "./custom.css";
import ApiDetail from "../../component/Card/ApiDetail";
import APIUsage from "./APIUsage";
import {getUserUsage} from "../../redux/api/usageAPI";
import {getUserUsageForGraph,} from "./../../redux/api/apiCallApi";
import {useQuery} from "@tanstack/react-query";
import useLocalStorage from "../../hooks/use-local-storage";
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import logo from "../../assets/img/gebeta-image.png"

function Usage() {
  const [currentProfile, _] = useLocalStorage({
    key: 'currentProfile',
    defaultValue: null,
  });

  const [graphData, setGraphData] = useState({ error: "no data" });

  const date = new Date();
  const currentDate = date.toJSON().slice(0, 10);

  const thirtyDaysAgoInMillis = date.getTime() - (30*24*60*60*1000);
  const thirtyDaysAgo = new Date(thirtyDaysAgoInMillis).toJSON().slice(0, 10);

  const [startingDate, setStartingDate] = useState(thirtyDaysAgo);
  const [endingDate, setEndingDate] = useState(currentDate);
  const [selected, setSelected] = useState("All");
  const [loading, setLoading] = useState(false);

  const { data: metricsData, isLoading: metricsLoading } = useQuery({
    queryKey: ['metrics', currentProfile.token],
    queryFn: () => getUserUsage(currentProfile.token),
    staleTime: 5 * 60 * 1000
  });

  function handleEndChange(event) {
    setEndingDate(event.target.value);
  }

  function handleStaringChange(event) {
    setStartingDate(event.target.value);
  }

  function handleChange(e) {
    setSelected(e.target.value);
  }

  const getGraphData = async () => {
    setLoading(true);
    if (startingDate && endingDate) {
      try {
        const response = await getUserUsageForGraph(selected.toUpperCase(), startingDate, endingDate, currentProfile.token);
        if (response.error == null) {
          setGraphData(response);
        }
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if(startingDate && endingDate){
      getGraphData();
    }
  }, [startingDate, endingDate, selected]);

  async function getMonthlyReportData() {
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - (30 * 24 * 60 * 60 * 1000)); // Last 30 days
    const apiType = "ALL";

    console.log(startDate,endDate)

    try {
      const response = await getUserUsageForGraph(apiType, startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0], currentProfile.token);

      if (response.error == null && response.data && response.data.data && response.data.data.data) {
        const totalUsage = Object.values(response.data.data.data).reduce((sum, day) => sum + (day.Total || 0), 0);
        console.log(totalUsage)
        return {[apiType]: totalUsage};
      } else {
        console.error(`Error fetching data for ${apiType}:`, response.error || 'Unexpected data structure');
        return {[apiType]: 0};
      }
    } catch (error) {
      console.error("Error fetching monthly report data:", error);
      return null;
    }
  }

  function handleDownloadUsagePdf() {
    getMonthlyReportData().then((monthlyData) => {
      if (!monthlyData) {
        console.error("Failed to fetch monthly data");
        return;
      }

      const totalUsage = monthlyData["ALL"];
      const calculatedPrice = totalUsage * 0.2 * 0.15;
      const price = Math.max(4000, calculatedPrice)

      const doc = new jsPDF();

      doc.addImage(logo, "PNG", 80, 10, 22, 22);

      const logoBottomY = 35;

      const currentDate = new Date().toLocaleDateString("en-GB");
      doc.setFontSize(12);
      doc.text(`Date: ${currentDate}`, 180, logoBottomY + 10, { align: "right" });
      doc.text(`GS/FIN/0027/${currentDate.split('/')[1]}/${currentDate.split('/')[2]}`, 180, logoBottomY + 20, { align: "right" });

      // Add company information
      doc.text(currentProfile.user.username.charAt(0).toUpperCase() + currentProfile.user.username.slice(1), 14, logoBottomY + 30);
      doc.text("Addis Ababa", 14, logoBottomY + 40);

      // Add subject with natural underline, centered
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Subject: Payment Request", 105, logoBottomY + 60, { align: "center" });
      doc.setFont("helvetica", "normal");
      doc.text("__________________________", 105, logoBottomY + 62, { align: "center" }); // Natural underline using text

      // Add body text with consistent spacing
      doc.setFontSize(12);
      doc.text("Dear Sir/Madam,", 14, logoBottomY + 80);
      doc.text(
          `This is kindly requesting your good office to settle the payment for the mapping`,
          14, logoBottomY + 90
      );
      doc.text(
          `service provided. The total amount to be paid is ${price.toFixed(2)} (Birr) for the usage`,
          14, logoBottomY + 100
      );
      doc.text(
          `of the last month. Please make the payment through the Bank of Abyssinia,`,
          14, logoBottomY + 110
      );
      doc.text(`account number 111762888, Fetawrari Gebeye Branch.`, 14, logoBottomY + 120);

      // Add closing
      doc.text(`Thank you for your prompt attention.`, 14, logoBottomY + 140);
      doc.text(`With best Regards,`, 14, logoBottomY + 150);
      doc.text(`Bemhreth Gezahegn`, 14, logoBottomY + 160);
      doc.text(`Managing Director`, 14, logoBottomY + 170);

      // Save the PDF
      doc.save("monthly_payment_request.pdf");
    });
  }

  return (
      <div className="flex flex-col min-h-screen bg-Dark">
        <div className="w-[95%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
          <div className=" justify-between items-center">
            <div className="mt-[2%] md:mt-[3%]">
              <ApiDetail metrics={metricsData} />
            </div>
            <div className="bg-[#202022] mt-[12%] md:mt-[2%] mb-[2%]">
              <div className="flex flex-col md:flex-row md:items-center py-5 mx-[1%] md:space-x-14">
                <div className="flex flex-row items-center justify-between">
                  <p className=" mx-4">Select endpoints : </p>
                  <select
                      className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4 text-white"
                      onChange={handleChange}
                  >
                    <option value="All" className="text-black">All</option>
                    <option value="Geocoding" className="text-black">Geocoding</option>
                    <option value="Direction" className="text-black">Direction</option>
                    <option value="Matrix" className="text-black">Matrix</option>
                    <option value="ONM" className="text-black">Onm</option>
                    <option value="TSS" className="text-black">TSS</option>
                  </select>
                </div>

                <div className="flex flex-row items-center justify-between mt-[2%] md:mt-[0%] ">
                  <p className="mx-4">from </p>
                  <input
                      type="date"
                      onChange={handleStaringChange}
                      className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4"
                      value={startingDate}
                  />
                </div>

                <div className="flex flex-row items-center justify-between mt-[2%] md:mt-[0%] ">
                  <p className=" mx-4">to </p>
                  <input
                      type="date"
                      onChange={handleEndChange}
                      className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4"
                      value={endingDate}
                  />
                </div>

                <div className="flex bg-GebetaMain/80 px-6 py-3 whitespace-nowrap border-none outline-none rounded">
                  <button onClick={handleDownloadUsagePdf}>Download Usage PDF</button>
                </div>
              </div>
            </div>

            <APIUsage graphData={graphData} isLoading={loading}/>
          </div>
        </div>
      </div>
  );
}

export default Usage;