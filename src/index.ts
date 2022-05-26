import { app } from './app'

const port = 5000

// Start server
app.listen(port, () => console.log(`File Transfer Manager application is running on port ${port}!`))