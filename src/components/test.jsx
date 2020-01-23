import React from "react"
import ReactCountryFlag from "react-country-flag"
 
function ExampleComponent () {
    return (
        <div>
            <ReactCountryFlag code="US" />
            <ReactCountryFlag
                className="emojiFlag"
                code="US"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            />
 
            <ReactCountryFlag code="US" svg />
            <ReactCountryFlag
                code="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />
 
            <ReactCountryFlag
                code="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            />
        </div>
    )
}
 
export default ExampleComponent