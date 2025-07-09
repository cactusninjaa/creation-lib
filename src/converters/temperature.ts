/**
 * Convertit une température de Celsius à Kelvin.
 * @param celsius - Température en Celsius.
 * @returns Température en Kelvin.
 */
export function celsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
}

/**
 * Convertit une température de Kelvin à Celsius.
 * @param kelvin - Température en Kelvin.
 * @returns Température en Celsius.
 */
export function kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}

/**
 * Convertit une température de Celsius à Fahrenheit.
 * @param celsius - Température en Celsius.
 * @returns Température en Fahrenheit.
 */
export function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

/**
 * Convertit une température de Fahrenheit à Celsius.
 * @param fahrenheit - Température en Fahrenheit.
 * @returns Température en Celsius.
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Convertit une température de Kelvin à Fahrenheit.
 * @param kelvin - Température en Kelvin.
 * @returns Température en Fahrenheit.
 */
export function kelvinToFahrenheit(kelvin: number): number {
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
}

/**
 * Convertit une température de Fahrenheit à Kelvin.
 * @param fahrenheit - Température en Fahrenheit.
 * @returns Température en Kelvin.
 */
export function fahrenheitToKelvin(fahrenheit: number): number {
    const celsius = fahrenheitToCelsius(fahrenheit);
    return celsiusToKelvin(celsius);
}