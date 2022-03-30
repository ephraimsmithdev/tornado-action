/*** -- NATIONAL WEATHER SERVICE --
 * https://api.weather.gov
 */
export const NWS_URLS = {
	nwsBaseUrl: "https://api.weather.gov",
	tornadoWarnings: `/alerts/active?event=Tornado%20Warning`,
	tornadoWarningsTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning",
	tornadoWatches: "/alerts/active?event=Tornado%20Watch",
	tornadoWatchesTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Watch",
	cancelledAlerts:
		"alerts?event=Tornado%20Warning%2CTornado%20Watch&message_type=cancel",
	cancelledAlertsTest:
		"alerts?start=2022-03-10T20%3A00%3A00Z&event=Tornado%20Warning%2CTornado%20Watch&message_type=cancel",
	activeAlertCount: "/alerts/active/count",
	alertTypes: "/alerts/types",
	alertsById: "/alerts",
};

/*** -- SEVERE WEATHER INVENTORY --
 * https://www.ncdc.noaa.gov/swdiws/{outputFormat}/{dataset}/{dateRange}
 */
export const SWDI_URLS = {
	baseURL: "https://www.ncdc.noaa.gov/swdiws",
};