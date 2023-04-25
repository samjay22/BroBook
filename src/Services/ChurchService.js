class ChurchService {
    churchEvents = {
        data: null,
        lastFetch: null,
    };

    async FetchEvents() {
        const now = Date.now();

        if (!this.churchEvents.data || now - this.churchEvents.lastFetch >= 10 * 60 * 1000) {
            const response = await fetch('https://localhost:7045/GetChurchEvents', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            this.churchEvents.data = await response.json();
            this.churchEvents.lastFetch = now;
        }

        return this.churchEvents.data;
    }
}

const NewChurchService = new ChurchService();
export default NewChurchService;
