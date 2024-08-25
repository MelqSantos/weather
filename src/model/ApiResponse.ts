// Interface para o objeto "coord"
export class Coord {
    lon: number;
    lat: number;
}

// Interface para o objeto "weather"
export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

// Interface para o objeto "main"
export class Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

// Interface para o objeto "wind"
export class Wind {
    speed: number;
    deg: number;
}

// Interface para o objeto "rain"
export class Rain {
    '1h': number;
}

// Interface para o objeto "clouds"
export class Clouds {
    all: number;
}

// Interface para o objeto "sys"
export class Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

// Interface para a resposta completa da API
export class ApiResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
