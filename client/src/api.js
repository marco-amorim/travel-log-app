const API_URL = 'http://localhost:2020';

export async function listLogEntries() {
	const response = await fetch(`${API_URL}/api/logs`);
	return response.json();
}
