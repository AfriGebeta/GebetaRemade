const introductionObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of Introduction" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs",
    responseTable : [
        { status : 200, message : "ok",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoRoute",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoSegment",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - No Token",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - Invalid Token",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 422, message : "InvalidInput",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."}

    ],

    optionalParameter : [
        {
            name: "instruction",
            description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
        },
        {
            name: "waypoints",
            description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
        }
    ],
    requiredParameter : [
        {
            name: "origin and destination",
            description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
        },
        {
            name: "apikey",
            description: "you api key"
        }
    ]
}

// direction

const DirectionObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of Direction API" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs",
    responseTable : [
        { status : 200, message : "ok",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoRoute",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoSegment",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - No Token",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - Invalid Token",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 422, message : "InvalidInput",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."}

    ],

    optionalParameter : [
        {
            name: "instruction",
            description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
        },
        {
            name: "waypoints",
            description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
        }
    ],
    requiredParameter : [
        {
            name: "origin and destination",
            description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
        },
        {
            name: "apikey",
            description: "you api key"
        }
    ]
}


// matrix
const matrixObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of matrix API" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs",
    responseTable : [
        { status : 200, message : "ok",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoRoute",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoSegment",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - No Token",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - Invalid Token",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 422, message : "InvalidInput",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."}

    ],

    optionalParameter : [
        {
            name: "instruction",
            description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
        },
        {
            name: "waypoints",
            description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
        }
    ],
    requiredParameter : [
        {
            name: "origin and destination",
            description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
        },
        {
            name: "apikey",
            description: "you api key"
        }
    ]
}

// tss
const TssObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of Tss API" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs",
    responseTable : [
        { status : 200, message : "ok",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoRoute",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoSegment",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - No Token",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - Invalid Token",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 422, message : "InvalidInput",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."}

    ],

    optionalParameter : [
        {
            name: "instruction",
            description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
        },
        {
            name: "waypoints",
            description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
        }
    ],
    requiredParameter : [
        {
            name: "origin and destination",
            description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
        },
        {
            name: "apikey",
            description: "you api key"
        }
    ]
}


// onm
const onmObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of ONM API" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs",
    responseTable : [
        { status : 200, message : "ok",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoRoute",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoSegment",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - No Token",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - Invalid Token",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 422, message : "InvalidInput",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."}

    ],

    optionalParameter : [
        {
            name: "instruction",
            description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
        },
        {
            name: "waypoints",
            description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
        }
    ],
    requiredParameter : [
        {
            name: "origin and destination",
            description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
        },
        {
            name: "apikey",
            description: "you api key"
        }
    ]
}


//geocoding

const GeocodingObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of Geocoding API" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs",
    responseTable : [
        { status : 200, message : "ok",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoRoute",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 200, message : "NoSegment",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - No Token",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 401, message : "Not Authorized - Invalid Token",	description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."},
        { status : 422, message : "InvalidInput",description : "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."}

    ],

    optionalParameter : [
        {
            name: "instruction",
            description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
        },
        {
            name: "waypoints",
            description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
        }
    ],
    requiredParameter : [
        {
            name: "origin and destination",
            description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
        },
        {
            name: "apikey",
            description: "you api key"
        }
    ]
}
// geocoding
// direction
// matrix
// tss
// onm



export const documentationSideBarLinks =  [
    { 
        name: "Introduction", 
        href: "intro",
        subList : [
            { 
                name : 'Introduction to Rust',
                href : "javascript:void(0)"
            },
        ]

    }, 

    { 
        name: "Direction", 
        href: "direction",
        subList : [
            { 
                name : 'Overview',
                href : "javascript:void(0)"
            },
            { 
                name : 'use case of Direction API',
                href : "javascript:void(0)"
            },
            { 
                name : 'Requirement parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Optional parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API Responses',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API restrictions and limits',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API pricing',
                href : "javascript:void(0)"
            },
            
        ]

    }, 

    { 
        name: "Matrix", 
        href: "matrix",
        subList : [
            { 
                name : 'Overview',
                href : "javascript:void(0)"
            },
            { 
                name : 'use case of Direction API',
                href : "javascript:void(0)"
            },
            { 
                name : 'Requirement parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Optional parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API Responses',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API restrictions and limits',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API pricing',
                href : "javascript:void(0)"
            },
            
        ]

    }, 
    { 
        name: "ONM", 
        href: "onm",
        subList : [
            { 
                name : 'Overview',
                href : "javascript:void(0)"
            },
            { 
                name : 'use case of Direction API',
                href : "javascript:void(0)"
            },
            { 
                name : 'Requirement parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Optional parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API Responses',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API restrictions and limits',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API pricing',
                href : "javascript:void(0)"
            },
            
        ]

    }, 
    { 
        name: "Tss", 
        href: "tss",
        subList : [
            { 
                name : 'Overview',
                href : "javascript:void(0)"
            },
            { 
                name : 'use case of Direction API',
                href : "javascript:void(0)"
            },
            { 
                name : 'Requirement parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Optional parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API Responses',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API restrictions and limits',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API pricing',
                href : "javascript:void(0)"
            },
            
        ]

    }, 

    { 
        name: "Geocoding", 
        href: "geocoding",
        subList : [
            { 
                name : 'Overview',
                href : "javascript:void(0)"
            },
            { 
                name : 'use case of Direction API',
                href : "javascript:void(0)"
            },
            { 
                name : 'Requirement parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Optional parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API Responses',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API restrictions and limits',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API pricing',
                href : "javascript:void(0)"
            },
            
        ]

    },

    { 
        name: "MapMatching", 
        href: "intro",
        subList : [
            { 
                name : 'Overview',
                href : "javascript:void(0)"
            },
            { 
                name : 'use case of Direction API',
                href : "javascript:void(0)"
            },
            { 
                name : 'Requirement parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Optional parameter',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API Responses',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API restrictions and limits',
                href : "javascript:void(0)"
            },
            { 
                name : 'Directions API pricing',
                href : "javascript:void(0)"
            },
            
        ]

    }, 

]


export const returnDocumentationObject = (type) => {

    if(type == "intro") return introductionObject
    else if(type == "onm") return onmObject
    else if(type == "matrix") return matrixObject
    else if (type == "direction") return DirectionObject
    else if (type == "geocoding") return GeocodingObject
    else if (type == "tss") return TssObject
}