import React, { useState } from "react";
import Priceplan from "../priceplan/Priceplan";
import {Link} from "react-router-dom";
import { RightOutlined} from "@ant-design/icons";

const PricingSlider = ({ text, mapboxRate, googleRate, gebetaRate }) => {
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value));
    };

    const getBackgroundColor = (value) => {
        if (value <= 100) return '#fcf2e9';
        if (value <= 5000) return '#fdbe85';
        if (value <= 10000) return '#fdac63';
        if (value <= 20000) return '#fb9234';
        return '#fd7800';
    };

    const formatPrice = (price) => {
        return sliderValue === 25000 ? (
            <div className="flex items-center gap-2">
                <Link to="/contact" className="text-[14px] text-GebetaMain hover:underline">Contact sales</Link>
                <RightOutlined className="text-sm text-GebetaMain" />
            </div>
        ) : (
            `$${price.toFixed(2)}`
        );
    };

    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <p className="text-xl font-semibold">{text}</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="w-1/3 pr-4">
                    <input
                        type="range"
                        min="0"
                        max="25000"
                        step="100"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                            background: `linear-gradient(to right, ${getBackgroundColor(0)} 0%, ${getBackgroundColor(sliderValue)} ${(sliderValue / 25000) * 100}%, #e5e7eb ${(sliderValue / 25000) * 100}%)`,
                        }}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>0</span>
                        <span>100</span>
                        <span>5k</span>
                        <span>10k</span>
                        <span>20k</span>
                        <span>25k</span>
                    </div>
                    <p className="text-sm font-bold mt-2">{sliderValue.toLocaleString()} requests</p>
                </div>
                <div className="w-1/6  rounded-lg">
                    <h3 className="text-sm font-semibold mb-1">Gebeta Maps</h3>
                    <p className="text-lg font-bold">{formatPrice(sliderValue * gebetaRate)}</p>
                </div>
                <div className="w-1/6 p-2 rounded-lg">
                    <h3 className="text-sm font-semibold mb-1">Google Maps</h3>
                    <p className="text-lg font-bold">{`$${(sliderValue * gebetaRate).toFixed(2)}`}</p>
                </div>
                <div className="w-1/6 p-2 rounded-lg">
                    <h3 className="text-sm font-semibold mb-1">Mapbox</h3>
                    <p className="text-lg font-bold">{`$${(sliderValue * gebetaRate).toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    );
};

const Pricing = () => {
    return (
        <div className="text-white">
            <Priceplan />
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Pricing Comparison</h2>
                <p className="mb-4">Compare Gebeta Maps pricing with other providers. Use our Pricing and Usage calculator to estimate your usage cost per API.</p>
                <div className="mt-8">
                    <div className="bg-gray-800 rounded-lg p-8">
                        <PricingSlider text="Directions API" mapboxRate={0.00045} googleRate={0.005} gebetaRate={0.0002} />
                        <PricingSlider text="Matrix API" mapboxRate={0.00135} googleRate={0.01} gebetaRate={0.0006} />
                        <PricingSlider text="Optimization API" mapboxRate={0.0054} googleRate={0.01} gebetaRate={0.0024} />
                        <PricingSlider text="Geocoding API" mapboxRate={0.00075} googleRate={0.005} gebetaRate={0.0003} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Ourpricing = () => {
    return (
        <div className="mt-16 relative flex flex-col w-full">
            <h1 className="mx-auto mb-8 text-4xl font-bold text-[#A0AABA]" style={{fontFamily: "Zen Dots"}}>
                Pricing
            </h1>
            <div className="flex justify-center">
                <Pricing />
            </div>
        </div>
    );
};

export default Ourpricing;