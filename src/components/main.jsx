import React from 'react';
import ReactDOM from "react-dom";
import { VectorMap } from 'react-jvectormap';
import Flag from "react-flagkit";

const { getCode, getName, getData } = require("country-list");
const total = {
    PL: 110000,
}
const landSoldiers = {
    PL: 48000,
};
const airForces = {
    PL: 800
}
const tanks = {
    PL: 865
}
const atomicBombs = {
    PL: 0
}
export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.selectedCountry = [];
        this.GiveTheData = this.GiveTheData.bind(this);
        this.generateTheDescribe = this.generateTheDescribe.bind(this);
    }
    generateTheDescribe(countryCode) {
        let countryTotal = React.createElement("div", { className: "army-quantity total" }, "Total soldiers: " + total[countryCode]);
        let countryLandSoldiers = React.createElement("div", { className: "army-quantity land-soldiers" }, "Land soldiers: " + landSoldiers[countryCode]);
        let countryAirForce = React.createElement("div", { className: "army-quantity air-forces" }, "Airplanes: " + airForces[countryCode]);
        let countryTanks = React.createElement("div", { className: "army-quantity tanks" }, "Tanks: " + tanks[countryCode]);
        let countryAtomicBombs = React.createElement("div", { className: "army-quantity abombs" }, "Atomic arsenal: " + atomicBombs[countryCode]);

        let title = React.createElement("header", { className: "army-header" }, getName(countryCode));
        let flag = <Flag className="countryFlag" size={30} country={countryCode} />
        let describe = React.createElement("div", { className: "country-content" }, [countryTotal, countryLandSoldiers, countryAirForce, countryTanks, countryAtomicBombs]);
        return [title, flag, describe];
    }
    GiveTheData(e, countryCode) {
        if (this.selectedCountry.includes(countryCode)) {
            ReactDOM.unmountComponentAtNode(document.querySelector(".adding-space"));
            this.selectedCountry.splice(this.selectedCountry.indexOf(countryCode), 1);
            if (this.selectedCountry.length > 0) {
                countryCode = this.selectedCountry[0];
                let dataForRender = this.generateTheDescribe(countryCode);

                let toAdd = React.createElement(
                    "div",
                    { className: "selectedArmy-content " + countryCode },
                    dataForRender
                );
                ReactDOM.render(
                    toAdd,
                    document.querySelector(".adding-space")
                );
            }
        }
        else {
            let dataForRender = this.generateTheDescribe(countryCode);
            
            
            let toAdd = React.createElement(
                "div",
                { className: "selectedArmy-content " + countryCode },
                dataForRender
            );
            ReactDOM.render(
                toAdd,
                document.querySelector(".adding-space")
            );
            this.selectedCountry.push(countryCode);
        }

    }
    render() {
        return (
            <div className="map-container">
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "520px"
                    }}
                    onRegionClick={this.GiveTheData}
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#ccc",
                            "fill-stroke": "#111",
                        },
                        hover: {
                            fill: "#1999ff"
                        }
                    }}
                    regionsSelectable={true} />
            </div>);

    }
}